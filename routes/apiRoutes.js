//TODO after adding Id working then replace contents of db.json with []
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { uuid } = require("uuidv4");

router.get("/notes", function (req, res) {
  const notes = fs.readFileSync("db/db.json", "utf8");

  const parseNotes = JSON.parse(notes);

  res.json(parseNotes);
});

//save the note
router.post("/notes", function (req, res) {
  const newNote = req.body;
  newNote.id = uuid();

  const notes = fs.readFileSync("db/db.json", "utf8");

  const parseNotes = JSON.parse(notes);
  parseNotes.push(newNote);
  const parseNotesString = JSON.stringify(parseNotes);
  fs.writeFileSync("db/db.json", parseNotesString);
  res.json(newNote);
});

router.delete("/notes/:id", function (req, res) {
  const noteToDelete = req.params.id;

  const notes = fs.readFileSync("db/db.json", "utf8");
  const parseNotes = JSON.parse(notes);

  const filteredNotes = parseNotes.filter((note) => note.id != noteToDelete);

  //TODO delete or filter out from parseNotes, the note that has the same id as noteToDelete
  //TODO make sure I stringify the modified array[]

  const parseNotesString = JSON.stringify(filteredNotes);
  fs.writeFileSync("db/db.json", parseNotesString);
  res.json(noteToDelete);
});

// // router.get("/notes", function (req, res) {
// //   fs.readFileSync("db/db.json", "utf8", function (err, log) {
// //     if (err) throw err;
// //     const notes = JSON.parse(log);
// //     notes.push(req.body);

// //     fs.writeFile;
// //   });
// // });
// // router.get("/notes", function (req, res) {});

module.exports = router;
