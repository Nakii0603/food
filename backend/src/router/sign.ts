import express from "express";
import { createUser, login, getAllUsers, userRegistration } from "../controller/sign";
import { encrypt } from "../middleware/encrypt";

const UserRouter = express.Router();

UserRouter.post("/sign", createUser, userRegistration, encrypt)
UserRouter.post("/login",login)
UserRouter.get("/getUser", getAllUsers)

export {UserRouter}