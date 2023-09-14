import inquirer from "inquirer";
let electricitybill=Math.ceil(Math.random()*1000+1)
let gasbill=Math.ceil(Math.random()*1000+1)
let wifibill=Math.ceil(Math.random()*1000+1)

async function bill(balance:number) {
    let options=await inquirer.prompt([
        {
            name:"bills",
            type:"list",
            choices:[`electricity bill`,`gas bill`,`wifi bill`]
        }
    ])
    if (options.bills==`electricity bill`) {
        console.log(`your bill amount : ${electricitybill}`)
        balance-=electricitybill
    }else if (options.bills==`gas bill`) {
        console.log(`your bill amount : ${gasbill}`)
        balance-=gasbill
    }else if(options.bills==`wifi bill`) {
        console.log(`your bill amount : ${wifibill}`)
        balance-=wifibill
    }
    return balance
}
export default bill