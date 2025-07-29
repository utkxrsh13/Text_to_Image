import { registerUser, loginUser, userCredits } from "../controllers/userController.js";
import express from "express";
import userAuth from "../middlewares/auth.js";
import { getUserHistory } from "../controllers/imageController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits",userAuth, userCredits);
userRouter.get("/history", userAuth, getUserHistory);

export default userRouter;
