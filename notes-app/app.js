const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");

// console.log(process.argv);
// Customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    //  console.log("Removing a notes");
    notes.removeNote(argv.title);
  },
});

// create list command

yargs.command({
  command: "list",
  describe: "List a note",
  handler() {
    // console.log("listing out all notes");
    notes.listNotes();
  },
});

// create read command

yargs.command({
  command: "read",
  describe: "read a note",
  handler() {
    console.log("reading a notes");
  },
});

console.log(yargs.argv);
yargs.parse();
