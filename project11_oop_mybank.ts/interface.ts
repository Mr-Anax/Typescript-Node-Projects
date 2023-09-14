import inquirer from "inquirer";

let bankAccountBalance=1000
let customer={
  firstName:'',
  lastName:'',
  gender:'',
  age:0,
  mobileNumber:'',
}
function customerInfo(){
  return `
    Name: ${customer.firstName} ${customer.lastName}
    Age: ${customer.age}
    Gender: ${customer.gender}
    Mobile: ${customer.mobileNumber}
    Account Balance: ${bankAccountBalance}
  `
}
let bankAccount={
  Debit:function(amount:any){
    if(bankAccountBalance>=amount){
      bankAccountBalance-=amount
      return `Debit successful. New balance: ${bankAccountBalance}`
    }else{
      return 'Insufficient funds for debit.'
    }
  },
  Credit: function (amount:any) {
    bankAccountBalance+=amount
    return `Credit successful. New balance: ${bankAccountBalance}`
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
    console.log(customerInfo())
    inquirer.prompt([
        {
          type:'input',
          name:'debitAmount',
          message:'Enter the amount to debit:',
        },
        {
          type:'input',
          name:'creditAmount',
          message:'Enter the amount to credit:',
        },
      ])
      .then((operations:any)=>{
        const debitAmount=parseFloat(operations.debitAmount)
        const creditAmount=parseFloat(operations.creditAmount)
        if(!isNaN(debitAmount)){
          console.log(bankAccount.Debit(debitAmount))
        }
        if(!isNaN(creditAmount)){
          console.log(bankAccount.Credit(creditAmount))
        }
      })
  })
}
main()
