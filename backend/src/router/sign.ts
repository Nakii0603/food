import express from "express";
import { createUser } from "../controller/sign";

export const UserRouter = express.Router();

UserRouter.route("/").post(createUser);

