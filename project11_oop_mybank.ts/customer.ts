import inquirer from "inquirer";

let bankAccount={
  balance:0,
  getAccountBalance(){
    return this.balance
  },
  deposit(amount:any){
    this.balance+=amount
  },
  withdraw(amount:any){
    if(this.balance>=amount){
      this.balance-=amount
      return true
    }
    return false
  },
}
let customer={
  firstName:'',
  lastName:'',
  gender:'',
  age:0,
  mobileNumber:'',
  customerInfo(){
    return `
        Name: ${this.firstName} ${this.lastName}
        Age: ${this.age}
        Gender: ${this.gender}
        Mobile: ${this.mobileNumber}
        Account Balance: ${bankAccount.getAccountBalance()}
    `
  },
}
let questions=[
  {
    type:'input',
    name:'firstName',
    message:'Enter your first name:',
  },
  {
    type:'input',
    name:'lastName',
    message:'Enter your last name:',
  },
  {
    type:'input',
    name:'age',
    message:'Enter your age:',
  },
  {
    type:'input',
    name:'gender',
    message:'Enter your gender:',
  },
  {
    type:'input',
    name:'mobileNumber',
    message:'Enter your mobile number:',
  },
]
function main(){
  inquirer.prompt(questions).then((answers:any)=>{
    Object.assign(customer,answers)
    console.log(customer.customerInfo())
  })
}
main();
