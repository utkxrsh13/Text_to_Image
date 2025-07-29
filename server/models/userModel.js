import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type: String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  creditBalance :{
    type:Number,
    default:5,
  },
  history: [
    {
      prompt: String,
      imageUrl: String,
      style: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const userModel =mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;