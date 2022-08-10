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
Getting user input: https://www.w3schools.com/jsref/met_win_prompt.asp <br>
Convert file to string: <br>
https://stackoverflow.com/questions/34857458/reading-local-text-file-into-a-javascript-array <br>
https://www.geeksforgeeks.org/javascript-program-to-read-text-file/ <br>
Get first N words of a string: https://bobbyhadz.com/blog/javascript-get-first-n-words-of-string <br>
Split string by newline and space: https://stackoverflow.com/questions/17271324/split-string-by-space-and-new-line-in-javascript <br>