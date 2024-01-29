import express from "express";
//import { connect } from "./mongoDb";
import { connectDatabase } from "./utils/database.js";
import { UserRouter } from "./router/login.js";
import cors from "cors";

const port = 8000;
const app = express();
connectDatabase();
app.use(UserRouter);
app.use(cors());
app.listen(port, () => {
  console.log("server is runing 8000 ");
});

// app.get("/", (req, res) => {
//   res.send("this is homepage");
// });
