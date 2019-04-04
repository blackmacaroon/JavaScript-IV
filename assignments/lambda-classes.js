// CODE here for your Lambda Classes
class Person {
      constructor(attributes){
            this.name = attributes.name,
            this.locat = attributes.locat,
            this.age = attributes.age,
            this.gender = attributes.age
      }
      speak(){
            return `Hello, my name is ${this.name}, I am from ${this.locat}.`;
      }
};

class Instructor extends Person{
      constructor(attributes){
            super(attributes);
            this.favLang = attributes.favLang,
            this.specialty = attributes.specialty,
            this.catchPhrase = attributes.catchPhrase   
      }
      demo(subject){
            return `Today we are learning about ${subject}.`;
      }
      grade(student, subject){
            return `${student.name} receives a perfect score on ${subject}!`;
      }
      teach(student){
           student.grades += Math.round(Math.random()) * 2 - 1;
            return `${student.name}, your new grade is ${student.grades}`;
      }
};

class Student extends Person {
      constructor(attributes){
            super(attributes);
            this.previousBackground = attributes.previousBackground,
            this.className = attributes.className,
            this.favSubjects = attributes.favSubjects,
            this.grades = attributes.grades
      }
      listsSubjects(){
            return this.favSubjects;
      }
      PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}.`;
      }
      sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}.`;
      }
      graduate(){
            if(this.grade >= 70);
            return `Congrats ${this.name}!!!`
      }
};

class ProjectManager extends Instructor {
      constructor(attributes){
            super(attributes);
            this.gradeClassName = attributes.gradeClassName,
            this.favInstructor = attributes.favInstructor
      }
      standUp(channel){
            return `${this.name} announced to ${channel}, @channel standy times!`;
      }
      debugsCode(student, subject){
            return `${this.name} debugs ${student.name}'s code on ${subject}.`;
      }
};



const arthur = new Instructor({
      name: 'Arthur',
      location: 'Montreal',
      age: 37,
      gender: 'male',
      favLanguage: 'Java',
      specialty: 'Front-end',
      catchPhrase: `Hey`
});

const buster = new Instructor({
      name: 'Buster',
      location: 'Montreal',
      age: 36,
      gender: 'male',
      favLanguage: 'CSS/LESS',
      specialty: 'UI',
      catchPhrase: `We're just specks of dust floating in space.`
});

const sueellen = new Student({
      name: 'Sue Ellen',
      location: 'Pointe-Claire',
      age: 37,
      gender: 'female',
      grades: 96,
      favLanguage: 'JavaScript',
      specialty: 'Front-end',
      catchPhrase: `Animals make better friends than people.`
});

const binky = new Student({
      name: 'Binky',
      location: 'Laval',
      age: 39,
      gender: 'male',
      grades: 66,
      favLanguage: 'Java',
      specialty: 'Video Games',
      catchPhrase: `My dad said he'd buy me a computer when it snows in July`
    });
    
const francine = new Student({
      name: 'Francine',
      location: 'Longueuil',
      age: 37,
      gender: 'female',
      grades: 79,
      favLanguage: 'Ruby',
      specialty: 'Meta Programming',
      catchPhrase: `Over half the people on Earth are girls`
});

const muffy = new ProjectManager({
      name: 'Muffy',
      location: 'Saint-Eustache',
      age: 36,
      gender: 'female',
      favLanguage: 'Ruby',
      specialty: 'One-Upping',
      catchPhrase: `Look ar her, trying to hold her head up high, despite her terrible posture.`
    });
    
const dw = new ProjectManager({
      name: 'Dora Winifred',
      location: 'Montreal',
      age: 30,
      gender: 'female',
      favLanguage: 'Python',
      specialty: 'Data-Analysis',
      catchPhrase: `I don't care about the president, I care about ponies.`
});

console.log(buster.teach(francine));
console.log(buster.teach(francine));
console.log(muffy.teach(binky));
console.log(muffy.teach(binky));
console.log(muffy.teach(binky));
console.log(arthur.teach(binky));
console.log(arthur.teach(binky));
console.log(arthur.teach(binky));
console.log(buster.teach(binky));
console.log(buster.teach(binky));
console.log(buster.teach(binky));
console.log(sueellen.graduate());