#!/usr/bin/env node
import createPerson from "./person.js";
import createStudent from "./student.js";
import inquirer from "inquirer";

async function askQuestion(){
    try{
        const answers=await inquirer.prompt([
            {
                type:'list',
                name:'choice',
                message:'Type 1 to talk to others and type 2 if you would rather keep to yourself:',
                choices:['1','2'],
            },
            {
                type:'input',
                name:'name',
                message:'What is your name:',
                when:(answers)=>answers.choice==='1' || answers.choice==='2',
            },
        ]);
        let personality="Mystery"
        if(answers.choice==='1'){
            personality="Extrovert";
        }else if(answers.choice==='2'){
            personality="Introvert"
        }
        console.log(`Your are: ${personality}`)
        if(answers.name){
            console.log(`Your name is: ${answers.name} and your personality type is: ${personality}`)
        }
    }catch(error){
        console.error(error);
    }
}
askQuestion();
