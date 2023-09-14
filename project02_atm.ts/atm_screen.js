import inquirer from "inquirer";
import chalk from "chalk";
import withdraw from "./cash_withdraw.js";
import deposite from "./cash_deposite.js";
import transfer from "./atm_transfer.js";
import bill from "./atm_bill_payment.js";
async function anothertransaction() {
    let other = await inquirer.prompt([
        {
            name: "othertransaction",
            type: "list",
            choices: [`yes`, `no`],
            message: "Annus! do you want another transaction ? "
        }
    ]);
    return other.othertransaction;
}
async function mainscreen(balance) {
    do {
        let options = await inquirer.prompt([
            {
                name: "menu",
                type: "list",
                choices: [`balance inquiry`, `cash withdraw`, `cash deposite`, `transfer`, `bill payment`, , `exit`],
                message: "please select your transaction type."
            }
        ]);
        switch (options.menu) {
            case "balance inquiry":
                console.log(chalk.yellow(`Your current balance is: ${balance}`));
                break;
            case "cash withdraw":
                balance = await withdraw(balance);
                console.log(`your transaction is successfull new balance is ${balance}`);
                break;
            case "cash deposite":
                balance = await deposite(balance);
                console.log(`your transaction is successfull new balance is ${balance}`);
                break;
            case "transfer":
                balance = await transfer(balance);
                console.log(`your transaction is successfull new balance is ${balance}`);
                break;
            case "bill payment":
                balance = await bill(balance);
                console.log(`your transaction is successfull new balance is ${balance}`);
                break;
            case "exit":
                trans = `no`;
                break;
            default:
                break;
        }
        if (options.menu !== `exit`) {
            console.log(chalk.green(`your transaction is successfull new balance is ${balance}`));
            var trans = await anothertransaction();
        }
        if (trans == `no`) {
            console.log(`Thank you for using our service `);
        }
    } while (trans != `no`);
    {
    }
}
export default mainscreen;
