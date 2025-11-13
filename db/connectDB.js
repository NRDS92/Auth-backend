
import mongoose from "mongoose";


export const connectDB = async()=>{

    const MONGO_URI = process.env.MONGODB_URI;
    try {
        const res = await mongoose.connect(MONGO_URI)
        console.log("MongoDB Connected: " + res.connection.host)
    } catch (error) {
        console.log("Error conecting to MongoDB", error.message)
        process.exit(1) //failure

    }
}

