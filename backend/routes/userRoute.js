import express from 'express'
import { loginController, registerController, userProfileController } from '../controllers/userController.js'
import { requireSignIn } from '../middleware/authHelper.js'

const router = express.Router()

router.post('/register',registerController)
router.post('/login',loginController)
router.get('/user-profile',userProfileController)

export default router