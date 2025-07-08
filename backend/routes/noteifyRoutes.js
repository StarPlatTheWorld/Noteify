// Imports express
import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/noteifyController.js";

// Sets up expressRouter for endpoint management.
const router = express.Router();

router.get("/", getAllNotes); // GET endpoint for fetching notes.
router.post("/", createNote); // POST endpoint for creating notes.
router.put("/:id", updateNote); // PUT endpoint for updating notes.
router.delete("/:id", deleteNote); // DELETE endpoint for deleting notes.

export default router;