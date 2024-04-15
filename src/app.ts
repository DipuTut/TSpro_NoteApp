//import { writeFile } from "fs";

 //const fs = require('node:fs/promises');
 const fs = require('fs');
 const readline = require('readline');
 let inputFile = 'logFile.txt';
 
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
 // Function für ermöglichen Sie Benutzern das Hinzufügen 
 // neuer Notizen durch Eingabe des Textinhalts 
 // als einfache Zeichenkette.
 
 console.log("It is a note taking APP.");
 
 
 // Diese Funktion fügt Eingabetext zu einer Textdatei hinzu
 function addNote(){
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
     console.log("Current notes:\n" + data);
     } catch (err) {
      console.log(err);
   }
   addNote();
 }
 
 // Diese Funktion löscht eine bestimmte Notiz aus der Textdatei
 
 function deleteNote() {
   rl.question('What Number of Note you want to delete?: ', (removeNote) => {
       const data = fs.readFileSync(inputFile, 'utf8').split('\n');
       data.splice(removeNote - 1, 1);
       try {
           fs.writeFileSync(inputFile, data.join('\n'));
           console.log("Your note has been deleted.");
           console.log(data);
       } catch (err) {
           console.error(err);
       }
       rl.close();
   });
 }
 
 
 displayNote(inputFile);
 
 
  
 //deleteNote();
 //displayNote(inputFile);
 