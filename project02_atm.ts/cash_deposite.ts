import inquirer from "inquirer";
async function deposite(balance:number) {
    let options=await inquirer.prompt([
        {
            name:"amtdeposite",
            type:"number",
            message:"enter your deposite amount"
        }
    ])
    balance+=options.amtdeposite
    return balance
}
export default deposite