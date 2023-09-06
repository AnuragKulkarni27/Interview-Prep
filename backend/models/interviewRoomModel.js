import mongoose from "mongoose";

const interviewRoomSchema = new mongoose.Schema({
    interviewerName: {
        type: String,
    },
    intervieweeName: {
        type: String,
    },
    joinRoom: {
        type: Boolean,
        default: true
    }
},{timestamps: true})

export default mongoose.model('interviewRoom',interviewRoomSchema)