#!calculator/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"
import operators from "./different-operators.js";

let sleep=()=>new Promise((res)=>setTimeout(res,3000))
async function calculatordisplay() {
 let karaoke=chalkanimation.karaoke('lets do calculation');
 await sleep();
karaoke.stop();
}
await calculatordisplay()

async function calculator() {
    let operator=await inquirer.prompt([
        {
            name:"operator",
            type:"list",
            choices:[`addition`,`substraction`,`multiplication`,`division`],
            message:"which tpe of calculation you want to do ? "
        },
        {
            type : "number",
            name : "num1",
            message : "Enter first value : "
    
        },
        {
            
            type : "number",
            name : "num2",
            message : "Enter second value : "
        }
    ])
    if (operator.add=="Add") {
        console.log(chalk.yellow(`${operator.num1}+${operator.num2}=${operator.num1+operator.num2}`))
    }else if (operator.add=="substract") {
        console.log(chalk.yellow(`${operator.num1}-${operator.num2}=${operator.num1-operator.num2}`))
    }else if (operator.add=="multiply") {
        console.log(chalk.yellow(`${operator.num1}*${operator.num2}=${operator.num1*operator.num2}`))
    }else if (operator.add=="divide") {
        console.log(chalk.yellow(`${operator.num1}/${operator.num2}=${operator.num1/operator.num2}`))
    }
}
// calculator()
async function againcalculation() {
    do {
        await calculator()
        var doitagain=await inquirer.prompt([
            {
                name:"again",
                type:"input",
                message:"do you want new calculation ? press y or n"
            }
        ])
    } while (doitagain.again==`Y` || doitagain.again==`y` || doitagain.again==`YES` || doitagain.again==`yes`);
}
againcalculation()