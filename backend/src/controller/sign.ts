import { Request, Response } from "express";
import { UserModel } from "../Model/sign";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRegistration = async (req: Request, res: Response) => {
  try {
    await UserModel.create(req.body);
    return res.status(201).send({ success: true });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      phone,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).send({ msg: "user not found" });
    }
    const isValid = bcrypt.compareSync(password, user.password as string);
    if (!isValid) {
      return res.status(400).send({ msg: "Email or password incorrect" });
    }
    const token = jwt.sign({ user }, "MY_SECRET_KEY");
    return res.status(200).send({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
