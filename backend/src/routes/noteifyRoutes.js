// Imports express
import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/noteifyController.js";

// Sets up expressRouter for endpoint management.
const router = express.Router();

router.get("/", getAllNotes); // GET endpoint for fetching notes.
router.get("/:id", getNoteById); //GET endpoint for fetching specific note.
router.post("/", createNote); // POST endpoint for creating notes.
router.put("/:id", updateNote); // PUT endpoint for updating notes.
router.delete("/:id", deleteNote); // DELETE endpoint for deleting notes.

export default router;