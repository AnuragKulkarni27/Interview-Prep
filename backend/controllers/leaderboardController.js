import userModel from "../models/userModel.js";

export const getTopUsers = async(req,res) => {
    try {
        const topUsers = await userModel.find({},{_id: 0, username: 1, email: 1, score: 1, interviewsTaken: 1, interviewsGiven: 1}).sort({score: -1}).limit(25)

        res.status(201).send({
            success: true,
            message: "Top users",
            users: topUsers
        })
    }
    catch(err) {
        res.status(500).send({
            success: false,
            message: "Something went wrong"
        })
    }
}