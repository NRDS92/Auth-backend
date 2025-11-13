import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import {connectDB} from "./db/connectDB.js"
import authRoutes from "./routes/auth.route.js";


const app = express()
const PORT = process.env.PORT || 4000
const allowedOrigins = [process.env.CLIENT_URL || "https://auth-frontend-jurb.vercel.app/"]
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser());

app.get("/",(req, res)=>{
    res.send("Hello Latin World!!")
})

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    connectDB()
    console.log("Server up on port 4000")
    
})
