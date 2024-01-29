import express from "express";
import { signUp } from "../controller/login.js";
export const UserRouter = express.Router();
UserRouter.post("/signUp", signUp);
