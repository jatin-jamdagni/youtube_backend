import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// DB connection function
const connectDB = async () => {
  try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

   console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("MongoDB connection Faild.", error)

    //if any error occur the it closes exit te process.
    process.exit(1)
  }
};

export default connectDB;
