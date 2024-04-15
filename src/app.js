//import { writeFile } from "fs";
//const fs = require('node:fs/promises');
var fs = require('fs');
var readline = require('readline');
var inputFile = 'logFile.txt';
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function für ermöglichen Sie Benutzern das Hinzufügen 
// neuer Notizen durch Eingabe des Textinhalts 
// als einfache Zeichenkette.
console.log("It is a note taking APP.");
// Diese Funktion fügt Eingabetext zu einer Textdatei hinzu
function addNote() {
    rl.question('Please write your note here: ', function (answer) {
        fs.appendFileSync(inputFile, answer + '\n');
        console.log('Your note is saved!');
        rl.close();
    });
}
// Diese Funktion zeigt die Notiz aus der Textdatei an
function displayNote(inputFile) {
    try {
        var data = fs.readFileSync(inputFile, { encoding: 'utf8' });
        console.log("Current notes:\n" + data);
    }
    catch (err) {
        console.log(err);
    }
    addNote();
}
// Diese Funktion löscht eine bestimmte Notiz aus der Textdatei
function deleteNote() {
    rl.question('What Number of Note you want to delete?: ', function (removeNote) {
        var data = fs.readFileSync(inputFile, 'utf8').split('\n');
        data.splice(removeNote - 1, 1);
        try {
            fs.writeFileSync(inputFile, data.join('\n'));
            console.log("Your note has been deleted.");
            console.log(data);
        }
        catch (err) {
            console.error(err);
        }
        rl.close();
    });
}
displayNote(inputFile);
//deleteNote();
//displayNote(inputFile);
