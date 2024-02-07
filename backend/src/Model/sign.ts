import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
  username: {
    type: String,
    length: {
      min: 2,
    },
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  phoneNumber: {
    type: Number,
    length: {
      minlength: 8,
      maxlength: 8,
    },
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});
export const UserModel = model("users", UserSchema);
