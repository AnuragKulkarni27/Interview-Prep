import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

export const requireSignIn = async(req,res,next) => {
    try {
        if(!req.headers.authorization) {
            return res.status(401).send({
                success: false,
                message: "Unauthorised!"
            })
        }
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = decode
        next()
    }
    catch(err) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: "Something went wrong"
        })
    }
}