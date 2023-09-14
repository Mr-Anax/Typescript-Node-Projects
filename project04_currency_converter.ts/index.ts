#!currencyconverter/bin/env node
import inquirer from "inquirer";

let SARtoGBP=0.21
let GBPtoSAR=4.70
let SARtoPKR=81.59
let PKRtoSAR=0.012
let GBPtoPKR=383.10
let PKRtoGBP=0.0026

let repeat=false

async function currencyconverter() {
    do{
    let convrtor:{fromthis:string,tothis:string,amount:number}=await inquirer.prompt([
        {
            name:"fromthis",
            type:"list",
            choices:[`SAR`,`GBP`,`PKR`],
            message:"select from which currency you want to convert : "
        },
        {
            name:"tothis",
            type:"list",
            choices:[`SAR`,`GBP`,`PKR`],
            message:"select to which currency you want to convert : "
        },
        {
            name:"amount",
            type:"number",
            message:"enter values : "
        }
    ])

    switch (convrtor.fromthis) {
        case `SAR`:
            if (convrtor.tothis===`GBP`) {
                let amount=convrtor.amount*SARtoGBP
                console.log(amount)
            }else if (convrtor.tothis===`PKR`) {
                let amount=convrtor.amount*SARtoPKR
                console.log(amount)
            }else(
                console.log(convrtor.amount)
            )
            break;
            case `GBP`:
                if (convrtor.tothis===`SAR`) {
                    let amount=convrtor.amount*GBPtoSAR
                    console.log(amount)
                }else if (convrtor.tothis===`PKR`) {
                    let amount=convrtor.amount*GBPtoPKR
                    console.log(amount)
                }else(
                    console.log(convrtor.amount)
                )
                break;
                case `PKR`:
                    if (convrtor.tothis===`GBP`) {
                        let amount=convrtor.amount*PKRtoGBP
                        console.log(amount)
                    }else if (convrtor.tothis===`SAR`) {
                        let amount=convrtor.amount*PKRtoSAR
                        console.log(amount)
                    }else(
                        console.log(convrtor.amount)
                    )
                    break;
        default:
            break;
    }
    repeat=await repeatit()
}
    while (repeat==true)
}

async function repeatit() {
    let again=await inquirer.prompt([
        {
            name:"redoing",
            type:"list",
            choices:[`y`,`n`],
            message:"do you want to convert more currenceis ? "
        }
    ])
    //ternary operator
    return again.redoing===`y`?true:false
}
currencyconverter()