import mongoose from "mongoose"

// Exports the async function for connecting to the MongoDB database with mongoose.
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); //Uses dotenv package to import the MongoDB URL from a .env file and connect
        console.log("MongoDB successfully connected.")
    } catch (error) {
       console.error("Connection error", error);
       process.exit(1) //exit with failure
    }
};