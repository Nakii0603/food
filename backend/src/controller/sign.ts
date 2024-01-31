import bcrypt from "bcrypt";
import { UserModel } from "../Model/sign";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  console.log(req.body);
  
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
    res.status(500).json({ error: "Internal Server Error" });
  }
};
