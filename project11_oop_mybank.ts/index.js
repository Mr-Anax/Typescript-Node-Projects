import inquirer from "inquirer";
// Initialize bank account balance
let bankAccountBalance = 1000;
// Create a customer object to store customer information
const customer = {
    firstName: '',
    lastName: '',
    gender: '',
    age: 0,
    mobileNumber: '',
};
function customerInfo() {
    return `
    Name: ${customer.firstName} ${customer.lastName}
    Age: ${customer.age}
    Gender: ${customer.gender}
    Mobile: ${customer.mobileNumber}
    Account Balance: ${bankAccountBalance}
  `;
}
const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter your first name:',
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Enter your last name:',
    },
    {
        type: 'input',
        name: 'age',
        message: 'Enter your age:',
    },
    {
        type: 'input',
        name: 'gender',
        message: 'Enter your gender:',
    },
    {
        type: 'input',
        name: 'mobileNumber',
        message: 'Enter your mobile number:',
    },
];
function main() {
    inquirer.prompt(questions).then((answers) => {
        Object.assign(customer, answers);
        console.log(customerInfo());
        // Perform Debit and Credit operations on the bank account
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'debitAmount',
                message: 'Enter the amount to debit:',
            },
            {
                type: 'input',
                name: 'creditAmount',
                message: 'Enter the amount to credit:',
            },
        ])
            .then((operations) => {
            const debitAmount = parseFloat(operations.debitAmount);
            const creditAmount = parseFloat(operations.creditAmount);
            if (!isNaN(debitAmount)) {
                if (bankAccountBalance >= debitAmount) {
                    bankAccountBalance -= debitAmount;
                    console.log(`Debit successful. New balance: ${bankAccountBalance}`);
                }
                else {
                    console.log('Insufficient funds for debit.');
                }
            }
            if (!isNaN(creditAmount)) {
                bankAccountBalance += creditAmount;
                console.log(`Credit successful. New balance: ${bankAccountBalance}`);
            }
        });
    });
}
main();
