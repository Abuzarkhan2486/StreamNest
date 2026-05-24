import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/home",(req,res)=>{
    res.send("hello from home ")
})





export default app