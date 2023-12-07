import mongoose, { Schema } from "mongoose";

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{
    timestamps:true
});

export const User =mongoose.models.user || mongoose.model('user',UserSchema);
