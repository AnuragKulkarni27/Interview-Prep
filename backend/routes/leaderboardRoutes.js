import express from "express";
import { getTopUsers } from "../controllers/leaderboardController.js";

const leaderboardRouter  = express.Router()

leaderboardRouter.get('/ratings',getTopUsers)

export default leaderboardRouter