#!/usr/bin/node env
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let countdowntimer = await inquirer.prompt([
    {
        name: "timer",
        type: "number",
        message: "Enter the countdown duration in seconds:",
        validate: (input) => {
            if (isNaN(input) || input <= 0) {
                return 'Please enter a valid positive number of seconds.';
            }
            else if (input > 60) {
                return `seconds must be in 60.`;
            }
            return true;
        }
    }
]);
let input = countdowntimer.timer;
function starttime(val) {
    let initialtime = new Date().setSeconds(new Date().getSeconds() + val);
    let intervaltime = new Date(initialtime);
    setInterval((() => {
        let currenttime = new Date();
        let timedifference = differenceInSeconds(intervaltime, currenttime);
        if (timedifference <= 0) {
            console.log("time's up");
            process.exit();
        }
        let min = Math.floor((timedifference % (3600 * 24)) / 3600);
        let sec = Math.floor(timedifference % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
starttime(input);
