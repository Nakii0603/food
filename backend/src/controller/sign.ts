import bcrypt from "bcrypt";
import { UserModel } from "../Model/sign";
import { Request, Response } from "express";

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
  console.log(res);
  try {
    const { email, password } = req.body;
    const user: any = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(user.password);
    const hashedPassword = await bcrypt.compare(password, user.password);
    if (!hashedPassword) {
      return res.status(401).send("Username or password incorrect");
    }
    res.status(200).json({ ...user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
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
