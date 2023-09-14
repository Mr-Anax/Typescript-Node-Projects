import createStudent from "./student.js";
function createPerson(){
    let person={
      personality:"Mystery",
      askQuestion(answer:any){
        if(answer===1){
          this.personality="Extravert"
        } else if(answer===2){
          this.personality="Introvert"
        }else{
          this.personality="You are still a mystery"
        }
      },
      getPersonality(){
        return this.personality
      },
    }
    return person
  }
  let person=createPerson()
  let answer=1
  person.askQuestion(answer)
  let personality=person.getPersonality()
  console.log(`Personality: ${personality}`)
export default createPerson()