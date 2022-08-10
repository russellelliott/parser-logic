var fileName = "test1.txt"; //prompt("Enter the file name: "); //get the name of the resume file being read

//Step 1: Read the file
function readFile(fileName){
    // Requiring fs module in which readFile function is defined.
    const fs = require('fs')
    
    var fileText = fs.readFileSync(fileName, "utf-8");
    fileText = fileText.replace( /\n/g, " " ); //replace newline with spaces
    return fileText;

}

function getWords(sourceFile, resumeFile){
    var readSourceFile = readFile(sourceFile);
    var sourceFileWords = readSourceFile.split(" "); //split source file by spaces
    
    var readResumeFile = readFile(resumeFile);

    var wordsList = [];
    for(var i=0; i<sourceFileWords.length; i++){ //iterate through all words of source file
        var currentWord = sourceFileWords[i];
        //check if the resume file includes the current word. if so, add it to the list if not already.
        if(readResumeFile.includes(currentWord) && !wordsList.includes(currentWord)){
            wordsList.push(currentWord);
        }
    }
    //convert words list into string
    wordsList = wordsList.join(' '); //join list together, and seperate words with spaces
    //ex: ["apples", "oranges", "bananas"] -> "apples,oranges,bananas"
    return wordsList;
}
//Step 2: Parse the file
function getEducation(fileName){
    var educationFile = "education.txt"; //file where education keywords are stored
    var education = getWords(educationFile, fileName);
    return education;
    
}

function getLanguages(fileName){
    var langFile = "languages.txt"; //file where language keywords are stored
    var languages = getWords(langFile, fileName);
    return languages;
}

function getName(fileName){
    //First 2 words
    data = readFile(fileName);
    //1. Split the string up by spaces
    //2. Since each word is seperated by space, get the first two
    //3. Join the two seperate words together into a unified string.
    const name = data.split( " " ).slice(0, 2).join(' ');
    return name
}

//get the parameters we need
var education = getEducation(fileName) //education
console.log(education);
var languages = getLanguages(fileName); //languages
console.log(languages);
const name = getName(fileName); //person's name
console.log(name);

