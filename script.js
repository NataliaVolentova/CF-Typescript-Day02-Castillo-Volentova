var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.bioPerson = function () {
        return "Hello there, my name is " + this.name + "  I am " + this.age + "  years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var robert = new Person("robert", 35, "software engineer");
console.log(robert.bioPerson());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Employee.prototype.bioPerson = function () {
        return _super.prototype.bioPerson.call(this) + " and I get " + this.salary + "  I am working in " + this.jobLocation + " ";
    };
    return Employee;
}(Person));
var natali = new Employee("Natali", 24, "software engineer", 70000, "Vienna");
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
