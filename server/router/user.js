import express from "express";
import {logout} from "../controller/user";

const userRouter = express.Router();


userRouter.get("/logout", logout);

export default userRouter;