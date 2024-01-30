import { model, Schema } from "mongoose";
const UserSchema = new Schema({
  username: String,
  email: String,
  address: String,
  password: String,
});
export const UserModel = model("user", UserSchema);
