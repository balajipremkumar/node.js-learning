const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added !"));
  } else {
    console.log(chalk.red.inverse("Note title taken !"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  console.log(notes, "notes");
  const notesToKeep = notes.filter((note) => note.title !== title);
  console.log(notesToKeep, "notesToKeep");
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No Note Found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes"));

  notes.forEach((note) => {
    console.log(note.title, note.body);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.white.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not Fond!"));
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSon);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
