#!number_guessin_game/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"

let off=()=> new Promise((res,rej)=>setTimeout(res,2000))
async function intro() {
    let introdisplay=chalkanimation.karaoke(`let's begin the game !!`)
    await off()
    introdisplay.stop()
}
// intro()
let playerlife=3
async function guessingame() {
    let randomnumber=Math.floor(Math.random()*10+1)
    do {
        playerlife--
        console.log(`player life left ${playerlife}`)
        var guess=await inquirer.prompt([
            {
                name:"player_num",
                type:"number",
                message:"Select numeric digits between 1 - 10:",
            }
        ])
        if (guess.player_num===randomnumber) {
            console.log(chalk.blue(`congratulation! you guess the correct number`))
        }else if (guess.player_num<randomnumber) {
            console.log(chalk.red(`your number ${guess.player_num} is lower than guess number`))
        }else if (guess.player_num>randomnumber) {
            console.log(chalk.red(`your number ${guess.player_num} is higher than guess number`))
        }
    } while (playerlife>0 && randomnumber!==guess.player_num);
    if (playerlife==0 && randomnumber!=guess.player_num) {
        console.log(chalk.yellowBright(`Game Over!`))
    }
}
// guessingame()

async function beginagain() {
    do {
        console.clear()
        await intro()
        playerlife=3
        await guessingame()
        var restart=await inquirer.prompt([
            {
                name:"play_again",
                type:"input",
                message:chalk.greenBright("do you want to restart he game? Press Y or N: ")
            }
        ])
    } while (restart.play_again===`y` || restart.play_again===`Y` || restart.play_again===`yes` || restart.play_again===`YES`);
}
beginagain()