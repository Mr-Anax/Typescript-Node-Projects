import inquirer from "inquirer";
import chalk from "chalk";
async function otheramount(balance) {
    let options = await inquirer.prompt([
        {
            name: "otheramount",
            type: "number",
            message: "please enter your amount"
        }
    ]);
    if (options.otheramount < balance) {
        balance -= options.otheramount;
    }
    else {
        console.log(chalk.red("sorry! you have insufficient balance"));
        balance = await otheramount(balance);
    }
    return balance;
}
async function withdraw(balance) {
    let options = await inquirer.prompt([
        {
            name: "withdraw",
            type: "list",
            choices: [`500`, `1000`, `2000`, `5000`, `10000`, `other amount`],
            message: "please select your amount"
        }
    ]);
    switch (options.withdraw) {
        case "500":
            if (balance > Number(options.withdraw)) {
                balance -= 500;
                console.log(`your new balance is ${balance}`);
            }
            else {
                console.log(chalk.red("sorry! you have insufficient balance"));
            }
            break;
        case "1000":
            if (balance > Number(options.withdraw)) {
                balance -= 1000;
                console.log(`your new balance is ${balance}`);
            }
            else {
                console.log(chalk.red("sorry! you have insufficient balance"));
            }
            break;
        case "2000":
            if (balance > Number(options.withdraw)) {
                balance -= 2000;
                console.log(`your new balance is ${balance}`);
            }
            else {
                console.log(chalk.red("sorry! you have insufficient balance"));
            }
            break;
        case "5000":
            if (balance > Number(options.withdraw)) {
                balance -= 5000;
                console.log(`your new balance is ${balance}`);
            }
            else {
                console.log(chalk.red("sorry! you have insufficient balance"));
            }
            break;
        case "10000":
            if (balance > Number(options.withdraw)) {
                balance -= 10000;
                console.log(`your new balance is ${balance}`);
            }
            else {
                console.log(chalk.red("sorry! you have insufficient balance"));
            }
            break;
        case "other amount":
            balance = await otheramount(balance);
            console.log(`your new balance is ${balance}`);
        default:
            break;
    }
    return balance;
}
export default withdraw;
