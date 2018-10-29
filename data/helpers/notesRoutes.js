const express = require("express");

const notes = require("./notesModel");

const router = express.Router();

//get list of notes
router.get("/", (req, res) => {
  notes
    .find()
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => res.status(500).json(err));
});

//get note by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const note = await notes.findById(id);

    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: "Note not found =(" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//create notes
router.post("/", (req, res) => {
  const note = req.body;

  notes
    .addNote(note)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//Update Notes
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  notes
    .update(id, changes)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: "No notes found to update" });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json(err));
});

//delete Notes
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  notes
    .remove(id)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: "No notes found to delete" });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
