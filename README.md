# FlashCards

## Abstract

This app allows the user to play a flashcards game using the command line interface in the terminal.  The user is presented with one question at a time, each question presenting multiple choice answers.  The user selects their guess by entering the number or using the arrow keys and pressing "enter".  The user receives immediate feedback to tell them if their guess was correct or incorrect.  After the final question the user sees a message announcing the end of the round, including the percent of questions they answered correctly.

## Install and Setup

Open your terminal and clone down this repo to your local device.  You will then `cd` into the repo.  Once you are in the repo run:

```bash
node index.js
```

## Game Play

When you start the game you will the following message, followed by the first question:

```
Node server running on port 3000
Welcome to FlashCards! You are playing with 30 cards.
```


![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

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
