import express from 'express'
import {loginController, 
        registerController, 
        reportUser, 
        updateGivenInterviewsController, 
        updateScoreController, 
        updateTakenInterviewsController, 
        userProfileController } from '../controllers/userController.js'
import { requireSignIn } from '../middleware/authHelper.js'

const router = express.Router()

router.post('/register',registerController)
router.post('/login',loginController)
router.get('/:username',userProfileController)
router.post('/report',requireSignIn,reportUser)
router.put('/update-score/',updateScoreController)
router.put('/update-taken/',updateTakenInterviewsController)
router.put('/update-given/',updateGivenInterviewsController)

router.get('/user-auth',requireSignIn,(req,res) => {
        res.status(200).send({ok: true})
    })

export default router