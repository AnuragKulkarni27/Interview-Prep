import bcrypt from 'bcrypt'
import { comparePassword, hashPassword } from '../helpers/passwordHelper.js'
import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken'

export const registerController = async(req,res) => {
    try {
        const { username, email, password, department, linkedIn } = req.body
        if(!username) {
            return res.send({
                success: false,
                message: "username is required!"
            })
        }
        if(!email) {
            return res.send({
                success: false,
                message: "email is required!"
            })
        }
        if(!password) {
            return res.send({
                success: false,
                message: "password is required!"
            })
        }
        if(!linkedIn) {
            return res.send({
                success: false,
                message: "linkedIn is required!"
            })
        }

        const existingUsername = await userModel.findOne({username})

        if(existingUsername) {
            return res.status(409).send({
                success: false,
                message: "Username aleardy Exists"
            })
        }

        const existingUser = await userModel.findOne({username,email,linkedIn})
        
        if(existingUser) {
            return res.status(409).send({
                success: false,
                message: "User Already Exists"
            })
        }

        const hashedPassword = await hashPassword(password)
        const user = await new userModel({username,email,password: hashedPassword,department,linkedIn,bio}).save()
        res.status(201).send({
            success: true,
            message: "User Created Successfully!",
            user
        })
    }
    catch(err) {
        res.status(500).send({
            success: false,
            message: "Something went wrong in backend",
            err
        })
    }
}

export const loginController = async(req,res) => {
    try {
        const { username, password } = req.body
        // validate 
        if(!username || !password) {
            return res.send(404).send({
                success: false,
                message: "Invalid user or password"
            })
        }

        // check user
        const user = await userModel.findOne({username}) 
        if(!user) {
            return res.status(404).send({
                success: false,
                message: "User not registered"
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match) {
            return res.status(409).send({
                success: false,
                message: "Wrong Password!"
            })
        }

        if(user.reportCount == 3) {
            return res.status(401).send({
                success: false,
                message: "You have been banned temporarily"
            })
        }
        const token = await JWT.sign({id: user._id},process.env.JWT_SECRET, {expiresIn: "7d"})
        res.status(200).send({
            success: true,
            message: "Logged In Successfully",
            user: {
                username: user.username,
                email: user.email
            },
            token: token
        })
    }
    catch(err) {
        console.log(err) 
        res.status(500).send({
            success: false,
            message: "Somthing went wrong"
        })
    }
}

export const userProfileController = async(req,res) => {
    try {
        const {username} = req.body

        const user = await userModel.findOne({username})
        if(!user) {
            return res.status(404).send({
                success: false,
                message: "User does not Exists"
            })
        }

        return res.status(200).send({
            success: true,
            user: {
                username: user.username,
                email: user.email,
                department: user.department,
                score: user.score,
                interviewTaken: user.interviewsTaken,
                interviewGiven: user.interviewsGiven,
                linkedIn: user.linkedIn,
            }
        })
    }
    catch(err) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            err
        })
    }
}

export const reportUser = async(req,res) => {
    try{
        const { _id } = req.body
        const existingUser = await userModel.findOne({_id})
        if(!existingUser) {
            res.status(404).send({
                success: false,
                message: "User not found"
            })
        }
        await userModel.findByIdAndUpdate(_id,{reportCount: existingUser.reportCount+1})
        res.status(201).send({
            success: true,
            message: "Reported!"
        })
    }
    catch(err) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: "Something went wrong!"
        })
    }
}