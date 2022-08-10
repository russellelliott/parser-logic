# parser-logic

Parser logic for Group Resume Parser project from Headstarter. https://github.com/Anform/resume-parser-group

## Key Info
- The first two letters is always the person's name
- This program will parse for keywords, which will be appended to a string, with individual key words seperated by spaces.

## Types of Keywords
- Languages, Frameworks, etc
- Education level (diploma, bachelors, etc)

## Files
`education.txt`: List of education levels
`parser.js`: Main parser program
`.gitingore`: Avoid pushing the `.DS_Store` onto the repo

## Running Program
In a terminal window, type `node parser.js` to run the program.

## Resources
Getting user input: https://www.w3schools.com/jsref/met_win_prompt.asp
Convert file to string: https://www.geeksforgeeks.org/javascript-program-to-read-text-file/
