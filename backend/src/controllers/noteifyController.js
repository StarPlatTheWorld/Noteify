import Note from "../../models/Note.js";

// Export async arrow function for fetching notes.
export const getAllNotes = async(req, res) => {
    try {
        const notes = await Note.find() // Tries to find exisiting notes within the mongo collection
        res.status(200).json(notes) // Throws a status code of 200.
    } catch (error) {
        console.error("Error in getAllNotes controller", error); // Throws an error in the console if finding notes was unsuccessful or if there is an issue with controller.
        res.status(500).json({message: "Internal server error"}); // Throws a status code of 500.
    }
};

// Export arrow function for creating notes.
export const createNote = async(req, res) => {
    try {
        const {title, content} = req.body
        const note = new Note({title, content})

        const savedNote = await note.save()
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller", error); // Throws an error in the console if finding notes was unsuccessful or if there is an issue with controller.
        res.status(500).json({message: "Internal server error"}); // Throws a status code of 500.
    }
};

// Export arrow function for updating notes.
export const updateNote = (req, res) => {
    res.status(200).json({ message: "Note updated successfully." });
};

// Export arrow function for deleting notes.
export const deleteNote = (req, res) => {
    res.status(200).json({ message: "Note deleted successfully." });
};