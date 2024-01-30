import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const port = 8000;
const app = express();
const MONGODB_URI =
  "mongodb+srv://admin123:admin123@cluster0.wovosh2.mongodb.net/?retryWrites=true&w=majority";
app.use(cors());
app.listen(port, async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }

  console.log("server is runing 8000 ");
});

// app.get("/", (req, res) => {
//   res.send("this is homepage");
// });
