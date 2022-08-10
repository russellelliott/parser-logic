# parser-logic

Parser logic for Group Resume Parser project from Headstarter. https://github.com/Anform/resume-parser-group

## Key Info
- The first two letters is always the person's name
- This program will parse for keywords, which will be appended to a string, with individual key words seperated by spaces.

## Types of Keywords
- Languages, Frameworks, etc
- Education level (diploma, bachelors, etc)

## Data format
```
degree: "Associate"
languages: "Java Python C"
name: "Billy Bob"
```

## Files
- `education.txt`: List of education levels
- `langauges.txt`: List of programming languages and frameworks
- `parser.js`: Main parser program
- `.gitingore`: Avoid pushing the `.DS_Store` onto the repo

## Running Program
In a terminal window, type `node parser.js` to run the program.

## Resources
### Getting user input:
https://www.w3schools.com/jsref/met_win_prompt.asp

### Convert file to string:
https://stackoverflow.com/questions/34857458/reading-local-text-file-into-a-javascript-array <br>
https://www.geeksforgeeks.org/javascript-program-to-read-text-file/ <br>

### Get first N words of a string:
https://bobbyhadz.com/blog/javascript-get-first-n-words-of-string

### Split string:
https://www.w3schools.com/jsref/jsref_split.asp

### Split string by newline and space:
https://stackoverflow.com/questions/9849754/how-can-i-replace-newlines-line-breaks-with-spaces-in-javascript <br>
https://stackoverflow.com/questions/17271324/split-string-by-space-and-new-line-in-javascript <br>

### Iterate through string:
https://tutorial.eyehunts.com/js/loop-through-words-in-a-string-javascript-iterate-words-in-a-string-in-js/ <br>
https://stackoverflow.com/questions/2430000/determine-if-string-is-in-list-in-javascript <br>

### Education Levels
https://help.nfc.usda.gov/publications/EPICWEB/6592.htm

### Top Programming Languages List
https://statisticstimes.com/tech/top-computer-languages.php

