import { Router } from "express";
import {registerUser, loginUser, logoutUser, getUserInfo} from '../controllers/auth.controller.js'
import validateToken from "../middlewares/validateToken.js";

const router = Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout',validateToken, logoutUser)

router.get('/dashboard', validateToken,getUserInfo)

export {router}