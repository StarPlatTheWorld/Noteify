import Note from "../../models/Note.js";

// Export async arrow function for fetching notes.
export const getAllNotes = async(req, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1}); // Tries to find exisiting notes within the mongo collection and sorts them from newest to oldest.
        res.status(200).json(notes); // Throws a status code of 200.
    } catch (error) {
        console.error("Error in getAllNotes controller", error); // Throws an error in the console if finding notes was unsuccessful or if there is an issue with controller.
        res.status(500).json({message: "Internal server error"}); // Throws a status code of 500.
    }
};

// Export async arrow function for fetching a note by its ID.
export const getNoteById = async(req, res) => {
    try {
        const note = await Note.findById(req.params.id); // Finds a note by a specific ID.

        if(!note) //If the note doesn't exist, throw a status error and error message.
            return res.status(404).json({message: "Note not found!"});

        res.status(200).json(note); // If note is found, throw status 200 and the found note.
    } catch (error) {
        console.error("Error in getNoteById controller", error); // Throws an error in the console if finding a specific note was unsuccessful or if there is an issue with controller.
        res.status(500).json({message: "Internal server error"}); // Throws a status code of 500.
    }
}

// Export arrow function for creating notes.
export const createNote = async(req, res) => {
    try {
        const {title, content} = req.body; // Receives the title and content from the body.
        const note = new Note({title, content}); // Applies the values to the note const.

        const savedNote = await note.save(); // saves the note.
        res.status(201).json(savedNote); // responds with the new note.
    } catch (error) {
        console.error("Error in createNote controller", error); // Throws an error in the console if finding notes was unsuccessful or if there is an issue with controller.
        res.status(500).json({message: "Internal server error"}); // Throws a status code of 500.
    }
};

// Export arrow function for updating notes.
export const updateNote = async(req, res) => {
    try {
        const {title, content} = req.body; // Requests the title and content from the body.      
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true}); // Requests the ID from a note, then updates the title and content.

        if(!updatedNote) // If updatedNote isn't found, return status 404 with Note not found message.
            return res.status(404).json({message: "Note not found."});
        
        res.status(200).json(updatedNote); // Responds with a 200 status code, and the updated note.
    } catch (error) {
        console.error("Error in updateNote controller", error); // Throws an error in the console if updating a note was unsuccessful or if there is an issue with controller.
        res.status(500).json({message: "Internal server error"}); // Throws a status code of 500.
    }
};

// Export arrow function for deleting notes.
export const deleteNote = async(req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id); // Finds an existing note by its ID.

        if(!deletedNote) // if the note doesn't exist, throw a 404 error.
            return res.status(404).json({message: "Note not found"});

        res.status(200).json({message: "Note deleted successfully"}); // responds with a success message.
    } catch (error) {
        console.error("Error in deleteNote controller"); // Throws an error in the console if deleting a note was unsuccessful or if there is an issue with controller.
        res.status(500).json({message: "Internal server error"}); // Throws a status code of 500.
    }
};