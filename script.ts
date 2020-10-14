class Person {
    name = "";
    age = "";
    jobTitle = "";
    constructor (name, age, jobTitle){
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
        bioPerson(){
            return `Hello there, my name is ${this.name}  I am ${this.age}  years old, and I am a ${this.jobTitle}`;   
    } 
}

let robert = new Person("robert", 35, "software engineer");
console.log(robert.bioPerson());





class Employee extends Person{
    salary;
    jobLocation;
constructor(name, age, jobTitle, salary, jobLocation){
    super(name, age, jobTitle);
    this.salary = salary;
    this.jobLocation = jobLocation;
    }
    bioPerson(){
        return `${super.bioPerson()} and I get ${this.salary}  I am working in ${this.jobLocation} `
    }
}

let natali = new Employee("Natali", 24, "software engineer", 70000, "Vienna");
console.log(natali.bioPerson());




/*class Person{
    name= "";
    age= "";
    jobTitle= "";

    constructor(name, age,jobTitel ){
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitel;
    }

}*/