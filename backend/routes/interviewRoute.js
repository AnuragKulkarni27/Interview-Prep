import express from 'express'
import { createInterviewRoomController, deleteInterviewRoomController, getInterviewController, getInterviewRoomController, joinInterviewRoomController } from '../controllers/interviewRoomController.js'

const router = express.Router()

router.post('/create-room',createInterviewRoomController)
router.post('/join-room',joinInterviewRoomController)
router.get('/get-room',getInterviewRoomController)
router.delete('/delete-room',deleteInterviewRoomController)
router.get('/room/:interviewId',getInterviewController)

export default router