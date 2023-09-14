#!todolist/bin/env/ node
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from "chalk";
let Todolist = [];
figlet("Todo List!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.red(data));
});
async function wannadoagain() {
    const answer = await inquirer.prompt([
        {
            name: 'repeat',
            type: 'list',
            choices: ['Yes', 'No'],
            message: 'Do you want to perform another operation?',
        },
    ]);
    return answer.repeat === 'Yes';
}
async function project03() {
    let repeatIt = true;
    do {
        const list = await inquirer.prompt([
            {
                name: 'option',
                type: 'list',
                choices: ['Add item', 'Display items', 'Remove item', 'Exit'],
                message: 'What do you want to do?',
            },
        ]);
        if (list.option === 'Add item') {
            const item = await inquirer.prompt([
                {
                    name: 'newitem',
                    type: 'input',
                    message: 'Enter a new item:',
                },
            ]);
            Todolist.push(item.newitem);
        }
        else if (list.option === 'Display items') {
            if (Todolist.length === 0) {
                console.log('Your list is empty.');
            }
            else {
                Todolist.forEach((element) => console.log(element));
            }
        }
        else if (list.option === 'Remove item') {
            if (Todolist.length === 0) {
                console.log('Your list is already empty.');
            }
            else {
                let removeItem = await inquirer.prompt([
                    {
                        name: 'item',
                        type: 'input',
                        message: 'Which item do you want to remove?',
                    },
                ]);
                let index = Todolist.indexOf(removeItem.item);
                if (index !== -1) {
                    Todolist.splice(index, 1);
                }
                else {
                    console.log('Item not found in the list.');
                }
            }
        }
        else if (list.option === 'Exit') {
            repeatIt = false;
        }
        if (repeatIt) {
            repeatIt = await wannadoagain();
        }
    } while (repeatIt);
}
setTimeout(() => {
    project03();
}, 1000);
