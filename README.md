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

![flashcards screenshot](https://user-images.githubusercontent.com/68293135/95514011-79419a00-0978-11eb-8e52-759c01deec7a.png)

Answer the question by selecting it with the arrow keys, or by typing in the number corresponding to the answer.  Then press "enter".  You will immediately know if your answer is correct or incorrect, and then the next question will display.  Continue playing until all questions are answered.  At the end of the round you will see what percent of questions were answered correctly.

![flash cards example gif](https://media.giphy.com/media/5azsQvwghE7bmdphUT/giphy.gif)

In addition to a percent of correct answers, the game will also print a **report card** which lists out which questions were missed so that you can study and try again.

## Tech Stack

This app includes javascript, mocha, and chai.

## Challenges and Wins

- One challenge was writing all of the tests required for each js file, as my experience in writing tests was limited prior to this.  I improved at TDD by completing this project and successfully wrote a range of tests for each javascript class in the app.
- This was my first experience using Command Line Interface and running an app from the terminal.  This presented a challenge when it came to properly linking all of the files so that the app would work correctly, but I did so successfully.

