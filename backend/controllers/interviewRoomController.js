import interviewRoomModel from "../models/interviewRoomModel.js";
import userModel from "../models/userModel.js"

// invoked upon user creating a new room
export const createInterviewRoomController = async(req,res) => {
    try {
        const {user} = req.body;
        const interviewRoom = await new interviewRoomModel({interviewerName: user}).save()
        res.status(201).send({
            success: true,
            message: "Created new interview room",
            interviewRoom
        })
    }
    catch(err) {
        res.status(500).send({
            success: false,
            message: "Error in creating room",
            err
        })
    }
}

export const joinInterviewRoomController = async(req,res) => {
    try {
        const { interviewRoomId, intervieweeName } = req.body
        await interviewRoomModel.findByIdAndUpdate(interviewRoomId,{intervieweeName,joinRoom: false})
        const interview = await interviewRoomModel.findById(interviewRoomId)
        res.status(201).send({
            success: true,
            message: "Added interviewee",
            interview
        })
    }
    catch(err) {
        res.status(500).send({
            success: false,
            message: "Error in Joining Room",
            err
        })
    }
}

export const deleteInterviewRoomController = async(req,res) => {
    try{
        const { interviewRoomId } = req.body
        await interviewRoomModel.findByIdAndDelete(interviewRoomId);
        res.status(201).send({
            success: true,
            message: "Deleted interview room",
        })
    }
    catch(err) {
        res.status(500).send({
            success: false,
            message: "Error in Deleting Room",
            err
        })
    }
}

export const getInterviewRoomController = async(req,res) => {
    try {
        const rooms = await interviewRoomModel.find({joinRoom: true}).sort({createdAt: -1}).limit(1)
        if(!rooms) {
            res.status(404).send({
                success: false,
                message: "No Meetings at this moment"
            })
        }
        res.status(200).send({
            success: true,
            message: "current interview rooms",
            rooms
        })
    }
    catch(err) {
        res.status(500).send({
            success: false,
            message: "Error in Getting Rooms",
            err
        })
    }
}

export const getInterviewController = async(req,res) => {
    try{
        const {interviewId} = req.params
        const interview = await interviewRoomModel.findById(interviewId)
        if(!interview) {
            return res.status(201).send({
                success: false,
                message: "interview not found"
            })
        }
        return res.status(200).send({
            success: true,
            message: "room",
            interview: {
                interviewerName: interview.interviewerName,
                intervieweeName: interview.intervieweeName
            }
        })
    }
    catch(err) {
        res.status(500).send({
            success: false,
            message: "Error in getting room"         
        })
    }
}