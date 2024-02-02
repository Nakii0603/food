import express from "express";
import { createUser, login, getAllUsers } from "../controller/sign";

export const UserRouter = express.Router();

UserRouter.route("/").post(createUser).post(login).get(getAllUsers);
UserRouter.route("/").get(getAllUsers);

