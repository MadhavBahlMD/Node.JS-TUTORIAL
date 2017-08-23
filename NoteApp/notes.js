console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title,body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try{
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(e) {
    console.log('First NOTE :)');
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  } else{
    console.log('This note already exists');
  }
};

var getAll = () => {
  console.log('Getting all notes');
};
var getNote = (title) => {
  console.log('Fetching data', title );
};
var removeNote = (title) => {
  console.log('Removing a NOTE');
  console.log(title , 'was removed');
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
