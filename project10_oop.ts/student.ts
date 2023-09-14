import createPerson from "./person.js";
function createStudent(){
    let student:any = {
      name:"",
      getName(){
        return this.name
      },
      setName(name:any){
        this.name=name
      },
    };
  let student2=createStudent()
  let answer=1
  student.askQuestion()
  student.setName("Mr-Anax")
  let name=student.getName()
  let personality=student.getPersonality()
  console.log(`Name:${name}`)
  console.log(`Personality:${personality}`)
  }
  export default createStudent()
