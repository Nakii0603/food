import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  phone: Number,
});
export const UserModel = model("user", UserSchema);

