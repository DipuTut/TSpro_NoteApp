
 //const fs = require('node:fs/promises');
const fs = require('fs');
const readline = require('readline');

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
fs.appendFileSync('logFile.txt', answer + '\n'); 
console.log('Your note is saved!');
rl.close();
});
}



// Diese Funktion zeigt die Notiz aus der Textdatei an

function displayNote() {
  try {
    const data = fs.readFileSync('logFile.txt', { encoding: 'utf8' });
    console.log(data);
    } catch (err) {
     console.log(err);
  }
  addNote();
}
displayNote();





// Diese Funktion löscht eine bestimmte Notiz aus der Textdatei
function deleteNote(){

}

