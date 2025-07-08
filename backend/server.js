// Imports expressjs and noteifyRoutes
import express from "express";
import noteifyRoutes from "./routes/noteifyRoutes.js";

// Initialises the express application
const app = express();

// Sets the app to use noteifyRoutes when hitting an endpoint with 
// /api/notes
app.use("/api/notes", noteifyRoutes)

// Listens to the PORT 5001 and logs it in the console
app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
})