import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { UserRouter } from "./router/sign";

const port = 8000;
const app = express();
const MONGODB_URI ="mongodb+srv://admin123:admin123@cluster0.wovosh2.mongodb.net/?retryWrites=true&w=majority";
app.use(cors());
app.use(express.json());
app.use("/", UserRouter);
app.use("/users", UserRouter);
app.use("/getUser", UserRouter);

app.listen(port, async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
  console.log("server is running on port 8000");
});
