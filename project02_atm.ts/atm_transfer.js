import inquirer from "inquirer";
import chalk from "chalk";
async function transfer(balance) {
    let options = await inquirer.prompt([
        {
            name: "accnumber",
            type: "number",
            message: "enter account number"
        },
        {
            name: "amttransfer",
            type: "number",
            message: "enter your amount"
        }
    ]);
    if (balance > options.amttransfer) {
        balance -= options.amttransfer;
    }
    else {
        console.log(chalk.red("sorry! you have insufficient balance"));
    }
    return balance;
}
export default transfer;
