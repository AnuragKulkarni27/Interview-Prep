import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true
    },

    // for user profile 
    score: {
        type: Number,
        default: 0,
    },
    interviewsTaken: {
        type: Number,
        default: 0,
    },
    interviewsGiven: {
        type: Number,
        default: 0,
    },
    reportCount: {
        type: Number,
        default: 3,
    },

    linkedIn: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },

    bio: {
        type: String,
        trim: true,
    }
},{timestamps: true})

export default mongoose.model('users',userSchema)