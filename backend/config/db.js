import mongoose from 'mongoose'

const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to db")
    }
    catch(err) {
        console.log("Error: ",err)
    }
}

export default connectDB