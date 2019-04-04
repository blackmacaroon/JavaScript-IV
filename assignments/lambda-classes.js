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







 