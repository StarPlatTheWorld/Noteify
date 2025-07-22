// Export arrow function for fetching notes.
export const getAllNotes = (req, res) => {
    res.status(200).send("You just fetched the notes!");
};

// Export arrow function for creating notes.
export const createNote = (req, res) => {
    res.status(201).json({ message: "Note created successfully." });
};

// Export arrow function for updating notes.
export const updateNote = (req, res) => {
    res.status(200).json({ message: "Note updated successfully." });
};

// Export arrow function for deleting notes.
export const deleteNote = (req, res) => {
    res.status(200).json({ message: "Note deleted successfully." });
};