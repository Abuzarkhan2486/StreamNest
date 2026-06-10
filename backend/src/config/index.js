import mongoose from "mongoose";



const connectToDb=async()=>{

     try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/streamNest`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }


}

export default connectToDb