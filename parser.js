var fileName = "test1.txt"; //prompt("Enter the file name: "); //get the name of the resume file being read

//Step 1: Read the file
function readFile(fileName){
    // Requiring fs module in which readFile function is defined.
    const fs = require('fs')
    
    var fileText = fs.readFileSync(fileName, "utf-8");
    fileText = fileText.replace( /\n/g, " " ); //replace newline with spaces
    return fileText;

}

//Step 2: Parse the file
function getEducation(fileName){
    var educationFile = "education.txt"
    var educationNames = readFile(educationFile); //get list of education types

    
}
var education = "" //education
var languages = "" //languages

function getName(fileName){
    //First 2 words
    data = readFile(fileName);
    //1. Split the string up by spaces
    //2. Since each word is seperated by space, get the first two
    //3. Join the two seperate words together into a unified string.
    const name = data.split( " " ).slice(0, 2).join(' ');
    return name
}

const name = getName(fileName);
console.log(name);

