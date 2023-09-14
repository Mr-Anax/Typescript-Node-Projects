#!quiz/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
async function runquiz() {
    console.log(chalk.red('Welcome to the Quiz!'));
}
runquiz();
let questions = [
    {
        name: 'q1',
        type: 'list',
        choices: ['Paris', 'Madrid', 'Berlin', 'Rome'],
        message: chalk.green('What is the capital of France?')
    },
    {
        name: 'q2',
        type: 'list',
        choices: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        message: chalk.green('Which planet is known as the Red Planet?')
    },
    {
        name: 'q3',
        type: 'list',
        choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        message: chalk.green('What is the largest mammal in the world?')
    },
    {
        name: 'q4',
        type: 'list',
        choices: ['Pacific Ocean', 'Indian Ocean', 'The Arctic Ocean', 'Southern Ocean'],
        message: chalk.green('Which one is the smallest ocean in the World?')
    },
    {
        name: 'q5',
        type: 'list',
        choices: ['Austrailia', 'Switzerland', 'England', 'Germany'],
        message: chalk.green(`Which country is known as the playground of Europe?`)
    },
];
function calculateResult(answers) {
    let score = 0;
    if (answers.q1 === 'Paris') {
        score += 1;
    }
    if (answers.q2 === 'Mars') {
        score += 1;
    }
    if (answers.q3 === 'Blue Whale') {
        score += 1;
    }
    if (answers.q4 === 'The Arctic Ocean') {
        score += 1;
    }
    if (answers.q5 === 'Switzerland') {
        score += 1;
    }
    return score;
}
let answers = await inquirer.prompt(questions);
let score = calculateResult(answers);
console.log(chalk.blue(`Your Score: ${score}/${questions.length}`));
if (score === questions.length) {
    console.log(chalk.blue('Congratulations! You got all the answers correct.'));
}
else {
    console.log(chalk.red('Keep practicing! You can do better.'));
}
