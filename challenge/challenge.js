//class person
var persArry = [];
var Person = /** @class */ (function () {
    function Person(motto, name, age, location) {
        this.motto = motto;
        this.name = name;
        this.age = age;
        this.location = location;
        persArry.push(this);
    }
    // method(): show the motto
    Person.prototype.showMotto = function () {
        return (this.motto);
    };
    //method: when clicked on the button once: add heart and show additionally name, agem location
    Person.prototype.clickImg = function () {
        return (this.name, this.age, this.location);
    };
    return Person;
}());
var hannes = new Person("live simply", "Hannes Cerry", 29, "Vienna");
var btn = document.getElementsByClassName("btn");
var _loop_1 = function (i) {
    btn[i].addEventListener("click", function () {
        document.getElementsByClassName("imagetext")[i].innerHTML += persArry[i].clickImg();
    });
};
//
for (var i in persArry) {
    _loop_1(i);
}
//in favourites show the full content of the person
