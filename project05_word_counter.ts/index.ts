#!wordcounter/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"

let sleep=()=>{return new Promise((res,rej)=>{setTimeout(res,5000)})}
async function programtitle() {
    let karaoketitle=chalkanimation.karaoke(`let's start counting characters and words without whitespaces !! `)
    await sleep()
    karaoketitle.stop()
}
programtitle()

async function question() {
    let que=await inquirer.prompt([
        {
            name:"string",
            type:"input",
            message:chalk.blue(`please write the paragraph you want to count characters and words without whitespaces : `)
        }
    ])
    //for words counting
    let words_counting=que.string.split(" ")
    console.log(`words in paragraph : ${words_counting.length}`)
    //for character counting
    let char_withoutspacing_counting=que.string.replace(/ /g,"")
    console.log(`characters in paragraph : ${char_withoutspacing_counting.length}`)
}

async function againcounting() {
    do {
        await question()
        var again=await inquirer.prompt([
            {
                name:"redoing",
                type:"input",
                message:chalk.red(`do you want counting characters and words without whitespaces again ? press Y or N :  `)
            }
        ])
    } while (again.redoing===`y` || again.redoing===`yes` || again.redoing===`Y` || again.redoing===`YES`);
}
againcounting()