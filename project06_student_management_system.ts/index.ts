#!SMS/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import figlet from "figlet";

figlet("Student Management System ! !", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.green(data));
    main()
  })
  interface Student{
    studentID:number
    name:string
    courses:string[]
    balance:number
}
let students:Student[]=[]
let nextStudentID:number=10000

async function addStudent(){
    inquirer.prompt([
        {
            name:'name',
            type:'input',
            message:'Enter student name:'
        }
    ])
        .then((answers)=>{let student:Student={
                studentID:nextStudentID++,
                name:answers.name,
                courses:[],
                balance:0,
            }
            students.push(student)
            console.log(`Student ${student.name} added with ID ${student.studentID}`)
        })
}
function enrollStudent(){
    inquirer.prompt([
            {
                name:'studentID',
                type:'input',
                message:'Enter student ID:'
            },
            {
                name: 'courseName',
                type:'input',
                message: 'Enter course name:'
            },
            {
                name:'courseCost',
                type:'input',
                message:'Enter course cost:'
            },
        ])
        .then((answers)=>{let student=students.find((s)=>s.studentID===Number(answers.studentID))
            if(student){
                student.courses.push(answers.courseName)
                student.balance+=Number(answers.courseCost)
                console.log(`Enrolled student ${student.name} in ${answers.courseName}`)
            }else{
                console.log("Student not found.")
            }
        })
}

function viewBalance(){
    inquirer.prompt([
        {
            name:'studentID',
            type:'input',
            message:'Enter student ID:'
        }
    ])
        .then((answers)=>{let student=students.find((s)=>s.studentID===Number(answers.studentID))
            if(student){
                console.log(`Balance for student ${student.name}: $${student.balance}`)
            }else{
                console.log("Student not found.")
            }
        })
}
function showStudentStatus(){
    inquirer.prompt([
        {
            name:'studentID',
            type:'input',
            message:'Enter student ID:'
        }
    ])
        .then((answers)=>{let student=students.find((s)=>s.studentID===Number(answers.studentID))
            if(student){
                console.log(`Student ID: ${student.studentID}`)
                console.log(`Name: ${student.name}`)
                console.log(`Courses Enrolled: ${student.courses.join(', ')}`)
                console.log(`Balance: $${student.balance}`)
            }else{
                console.log("Student not found.")
            }
        })
}
function main(){
    inquirer.prompt([
            {
                name: 'choice',
                type: 'list',
                message: 'Choose an operation:',
                choices: ['Add Student','Enroll Student','View Balance','Show Student Status','Exit']
            },
        ])
        .then((answers)=>{
            switch(answers.choice){
                case'Add Student':
                    addStudent()
                    break
                case'Enroll Student':
                    enrollStudent()
                    break
                case'View Balance':
                    viewBalance()
                    break
                case'Show Student Status':
                    showStudentStatus()
                    break
                case'Exit':
                    process.exit(0)
            }
        })
}
