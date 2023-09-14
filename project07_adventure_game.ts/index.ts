#!adventuregame/bin/env node
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';

figlet("Let's start the game ! ! ", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return
    }
    console.log(chalk.yellow(data));
    playGame()
  })
let gameMap:Record<string,{text:string;choices:Record<string,string>}>={
  start:{
    text:chalk.green('You are in a dark room. What do you do?'),
    choices:{
      'Open the door':'hallway',
      'Look for a light switch':'lightSwitch'
    }
  },
  hallway:{
    text:chalk.green('You are in a long hallway. Which way do you go?'),
    choices:{
      'Go left':'kitchen',
      'Go right':'bedroom'
    }
  },
  kitchen:{
    text:chalk.green('You find yourself in a kitchen. You see a fridge and a table.'),
    choices:{
      'Open the fridge':'fridge',
      'Inspect the table':'table'
    }
  },
  fridge:{
    text:chalk.green('You find some food in the fridge. You eat it and feel full. The end!'),
    choices:{}
  },
  table:{
    text:chalk.green('You find a key on the table. You can go back to the hallway.'),
    choices:{
      'Go back to the hallway':'hallway'
    }
  },
  lightSwitch:{
    text:chalk.green('You find a light switch and turn on the lights. You see a door ahead.'),
    choices:{
      'Open the door':'hallway'
    }
  },
}

async function playGame(){
  let currentScene='start'
  while(true){
    const scene=gameMap[currentScene]
    console.log(scene.text)
    const{choice}=await inquirer.prompt([
      {
        name:'choice',
        type:'list',
        choices: Object.keys(scene.choices),
        message:'Choose an option:'
      },
    ])
    if(scene.choices[choice]){
      currentScene=scene.choices[choice]
    }else{
      console.log('Invalid choice. The game will exit.')
      break
    }
    if(Object.keys(gameMap[currentScene].choices).length===0){
      console.log('Congratulations! You have reached the end of the game.')
      break
    }
  }
}
