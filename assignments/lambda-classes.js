// CODE here for your Lambda Classes
class Person {
      constructor(attributes){
            this.name = attributes.name,
            this.locat = attributes.locat,
            this.age = attributes.age,
            this.gender = attributes.age
      }
      speak(){
            return `Hello, my name is ${this.name}, I am from ${this.locat}!`;
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
            return `Today we are learning about ${subject}`;
      }
      grade(student, subject){
            return `${student.name} receives a perfect score on ${subject}`;
      }
};

class Student extends Person {
      constructor(attributes){
            super(attributes);
            this.previousBackground = attributes.previousBackground,
            this.className = attributes.className,
            this.favSubjects = attributes.favSubjects
      }
      listsSubjects(){
            return this.favSubjects;
      }
      PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}`;
      }
      sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}`;
      }
};





 