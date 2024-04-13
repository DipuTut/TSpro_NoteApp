import { writeFile } from "fs";

 //const fs = require('node:fs/promises');
const fs = require('fs');
const readline = require('readline');
let inputFile = 'logFile.txt';

// Function für ermöglichen Sie Benutzern das Hinzufügen 
// neuer Notizen durch Eingabe des Textinhalts 
// als einfache Zeichenkette.

console.log("It is a note taking APP.");


// Diese Funktion fügt Eingabetext zu einer Textdatei hinzu
function addNote(){
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question('Please write your note here: ', (answer: string) => {
fs.appendFileSync(inputFile, answer + '\n'); 
console.log('Your note is saved!');
rl.close();
});
}

// Diese Funktion zeigt die Notiz aus der Textdatei an

function displayNote(inputFile: string) {
  try {
    const data = fs.readFileSync(inputFile, { encoding: 'utf8' });
    console.log(data);
    } catch (err) {
     console.log(err);
  }
  addNote();
 
}
console.log("Current notes:" + "\n")
displayNote(inputFile);
deleteNote();

// Diese Funktion löscht eine bestimmte Notiz aus der Textdatei

 function deleteNote(){
 const prompt = require('prompt-sync') (); // npm install prompt-sync
 const removeNote = prompt('What Number of Note you want to delete?: ');
 const data = fs.readFileSync('logFile.txt','utf8').split('\n');
 //data.splice(0, 0);
 data.splice(removeNote-1, 1);
 //data.join('\n');
 //console.log(data);

try {
  fs.writeFileSync(inputFile, data.toString());  // file written successfully
  console.log("Your note has been deleted.");
  console.log(data);
} catch (err) {
  console.error(err);
}
 }
 
//deleteNote();
//displayNote(inputFile);
