var fileName = "test1.txt"; //prompt("Enter the file name: "); //get the name of the resume file being read

// Requiring fs module in which readFile function is defined.
const fs = require('fs')
  
// Reading data in utf-8 format which is a type of character set.
// Instead of 'utf-8' it can be other character set also like 'ascii'
fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) throw err;
  
    // Converting Raw Buffer to text
    // data using tostring function.
    console.log(data);
})