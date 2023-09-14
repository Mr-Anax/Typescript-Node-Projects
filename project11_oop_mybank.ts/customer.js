import inquirer from "inquirer";
const bankAccount = {
    balance: 0,
    getAccountBalance() {
        return this.balance;
    },
    deposit(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    },
};
const customer = {
    firstName: '',
    lastName: '',
    gender: '',
    age: 0,
    mobileNumber: '',
    customerInfo() {
        return `
        Name: ${this.firstName} ${this.lastName}
        Age: ${this.age}
        Gender: ${this.gender}
        Mobile: ${this.mobileNumber}
        Account Balance: ${bankAccount.getAccountBalance()}
    `;
    },
};
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
        console.log(customer.customerInfo());
        // You can add more questions and functionality here, such as depositing or withdrawing from the bank account.
    });
}
main();
