import inquirer from "inquirer";
let accountBalance = 0;
function setAccountBalance(balance) {
    accountBalance = balance;
}
function getAccountBalance() {
    return accountBalance;
}
function debit(amount) {
    let statement = "Transaction failed!";
    if (amount > 0) {
        statement = "The amount you entered is wrong!";
        if (accountBalance >= amount) {
            accountBalance -= amount;
            statement = `Transaction successful! New account balance is ${accountBalance}`;
        }
        else {
            statement = "Sorry, you have insufficient balance";
        }
    }
    return statement;
}
function credit(amount) {
    let statement = "Transaction failed!";
    if (amount > 0) {
        statement = "The amount you entered is wrong!";
        accountBalance += amount;
        statement = "Your account has been credited successfully";
    }
    return statement;
}
async function main() {
    try {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: ['Set Account Balance', 'Get Account Balance', 'Debit', 'Credit'],
            },
        ]);
        if (action === 'Set Account Balance') {
            const { balance } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'balance',
                    message: 'Enter the new account balance:',
                    validate: (value) => !isNaN(value),
                },
            ]);
            setAccountBalance(parseFloat(balance));
            console.log(`Account balance set to: ${getAccountBalance()}`);
        }
        else if (action === 'Get Account Balance') {
            console.log(`Account balance: ${getAccountBalance()}`);
        }
        else if (action === 'Debit') {
            const { amount } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'amount',
                    message: 'Enter the debit amount:',
                    validate: (value) => !isNaN(value),
                },
            ]);
            console.log(debit(parseFloat(amount)));
        }
        else if (action === 'Credit') {
            const { amount } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'amount',
                    message: 'Enter the credit amount:',
                    validate: (value) => !isNaN(value),
                },
            ]);
            console.log(credit(parseFloat(amount)));
        }
    }
    catch (error) {
        console.error(error);
    }
}
main();
