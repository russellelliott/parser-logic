var fileName = "test1.txt"; //prompt("Enter the file name: "); //get the name of the resume file being read

//Step 1: Read the file
function readFile(fileName){
    // Requiring fs module in which readFile function is defined.
    const fs = require('fs')
    
    var fileText = fs.readFileSync(fileName, "utf-8");
    return fileText;

}

//Step 2: Parse the file
var education = "" //education
var languages = "" //languages

//First 2 words
data = readFile(fileName);
console.log(data);
//1. Turn newlines into spaces
//2. Split the string up by spaces
//3. Since each word is seperated by space, get the first two
//4. Join the two seperate words together into a unified string.
const name = data.replace( /\n/g, " " ).split( " " ).slice(0, 2).join(' ');
console.log(name);
