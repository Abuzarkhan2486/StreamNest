import mongoose from "mongoose"



const userSchema= new mongoose.Schema(
    {


    },{timestamps:true}
)


export const userModel=mongoose.model("user",userSchema)