// Imports expressjs and noteifyRoutes
import express from "express";
import noteifyRoutes from "./routes/noteifyRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";

// Initialises dotenv config
dotenv.config();

// Initialises the express application and the PORT value
const app = express();
const PORT = process.env.PORT

// Runs the external MongoDB connection script for connecting to the database
connectDB();

// Middleware
app.use(express.json());

// Sets the app to use noteifyRoutes when hitting an endpoint with 
// /api/notes
app.use("/api/notes", noteifyRoutes)

// Listens to the PORT 5001 and logs it in the console
app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
})