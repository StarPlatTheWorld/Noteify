import mongoose from "mongoose";

// 1 create schema
// 2 model based off schema

// Creates a new schema using the Mongoose package
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Note is required to have a title and will be a string
    },
    content: {
        type: String,
        required: true, // Note is required to have content and will be a string
    },
},
{timestamps: true } // Note will have timestamps, createdAt and updatedAt
);

const Note = mongoose.model("Note", noteSchema) // Creates the Note utilising the noteSchema values

export default Note // Exports the Note