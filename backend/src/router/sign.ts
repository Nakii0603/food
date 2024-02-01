import express from "express";
import { createUser, login } from "../controller/sign";

export const UserRouter = express.Router();

UserRouter.route("/").post(createUser).post(login);

