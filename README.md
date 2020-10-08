# FlashCards

## Abstract

This app allows the user to play a flashcards game using the command line interface in the terminal.  The user is presented with one question at a time, each question presenting multiple choice answers.  The user selects their guess by entering the number or using the arrow keys and pressing "enter".  The user receives immediate feedback to tell them if their guess was correct or incorrect.  After the final question the user sees a message announcing the end of the round, including the percent of questions they answered correctly.

## Install and Setup

Open your terminal and clone down this repo to your local device.  You will then `cd` into the repo.  Once you are in the repo run:

```bash
node index.js
```

## Game Play

When you start the game you will see the following message, followed by the first question:

![flashcards screenshot](<img width="711" alt="Screen Shot 2020-10-08 at 3 09 55 PM" src="https://user-images.githubusercontent.com/68293135/95514011-79419a00-0978-11eb-8e52-759c01deec7a.png">)

Answer the question by selecting it with the arrow keys, or by typing in the number corresponding to the answer.  Then press "enter".  You will immediately know if your answer is correct or incorrect, and then the next question will display.  Continue playing until all questions are answered.  At the end of the round you will see what percent of questions were answered correctly.

![flash cards example gif](https://media.giphy.com/media/5azsQvwghE7bmdphUT/giphy.gif)

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `Round-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

---

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit - the linter is still running successfully.

Your linter will look at the JavaScript files you have within the `src` directory and the `test` directory. 

---
