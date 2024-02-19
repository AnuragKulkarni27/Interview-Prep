import express from 'express'
import dotenv from 'dotenv'
import morgan from "morgan"
import cors from 'cors'
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'
import leaderboardRouter from './routes/leaderboardRoutes.js'
import interviewRoute from './routes/interviewRoute.js'

const app = express()
dotenv.config()

connectDB()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/user',userRoute)
app.use('/api/v1',leaderboardRouter)
app.use('/api/v1/rooms',interviewRoute)

const PORT = process.env.PORT

app.get('/',(req,res) => {
    res.send({
        message: "hello world"
    })
})

app.listen(PORT,() => {
    console.log(`server listening`)
})