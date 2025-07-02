// Imports expressjs
import express from "express";

// Initialises the express application
const app = express();

// API Get request, responding with simple text
app.get("/api/notes", (req, res) => {
    res.send("You have got 5 notes.");
})

// Listens to the PORT 5001 and logs it in the console
app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
})