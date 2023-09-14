function createStudent() {
    let student = {
        name: "",
        getName() {
            return this.name;
        },
        setName(name) {
            this.name = name;
        },
    };
    let student2 = createStudent();
    let answer = 1;
    student.askQuestion();
    student.setName("Mr-Anax");
    let name = student.getName();
    let personality = student.getPersonality();
    console.log(`Name:${name}`);
    console.log(`Personality:${personality}`);
}
export default createStudent();
