class Person {
    constructor(name, gender, age) {
        this.name=name;
        this.gender=gender;
        this.age=age;
    }
    obtDetails() {
        const personDOM = document.getElementById('personDOM');
        personDOM.innerText = `I am ${this.name}, ${this.gender} and ${this.age} old.`;
    }
};

const person_one = new Person('Paco', 'non-binary', 56);
console.log(person_one.obtDetails());


class Student extends Person {
    constructor(name, gender, age, group, course) {
        super(name, gender, age)
        this.group = group;
        this.course = course;
    }
    register() {
        const studentDOM = document.getElementById('studentDOM');
        studentDOM.innerText = `Name: ${this.name}, gender: ${this.gender}, age: ${this.age}, group: ${this.group}, course ${this.course}`
    }
};

const student_one = new Student('Joaquin', 'Male', 17, 'B', '3º');
console.log(student_one.register());


class Teacher extends Person {
    constructor(name, gender, age, subject, level) {
        super(name, gender, age);
        this.subject=subject;
        this.level=level;
    }
    assign() {
        const teacherDOM = document.getElementById('teacherDOM');
        teacherDOM.innerText = `Name: ${this.name}, gender: ${this.gender}, age: ${this.age}, subject: ${this.subject}, level: ${this.level}`
    }
};

const teacher_one = new Teacher('Martina', 'Female', 32, 'English', 'Easy');
console.log(teacher_one.assign());