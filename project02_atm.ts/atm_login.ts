import users from "./atm_user.js";
import inquirer from "inquirer";
import mainscreen from "./atm_screen.js";
import withdraw from "./cash_withdraw.js";
import chalk from "chalk";
async function login(){
    let answer=await inquirer.prompt([
        {
            name:"accountnumber",
            type:"number",
            message:chalk.blue("please enter your account number")
        },
        {
            name:"pin",
            type:"password",
            message:chalk.blue("please enter your password")
        }
    ])
    
let user=users.find(x=>x.accountnumber==answer.accountnumber && x.pincode==answer.pin)
if (typeof user!="undefined") {
    console.log(`Welcome ${user.name}`)
    mainscreen(user.balance)
}else {
    console.log(chalk.red("you enter invalid pin or account number"))
}
}
export default login