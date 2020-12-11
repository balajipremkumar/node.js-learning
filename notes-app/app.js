const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js');
// const { command, string } = require('yargs');

// console.log(process.argv);

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

// create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a notes');
    }
})

yargs.command({
    command: 'list',
    describe:'List a note',
    handler:function(){
        console.log('listing out all notes');
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    handler:function(){
        console.log('reading a notes');
    }
})

console.log(yargs.argv);