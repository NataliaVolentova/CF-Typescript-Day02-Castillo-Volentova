//class person

const persArry: Array<any>=[];

class Person{
    motto: string;
    name: string;
    age: number;
    location: string;

    constructor(motto, name, age, location){
        this.motto = motto;
        this.name = name;
        this.age = age;
        this.location =location;
        persArry.push(this);
    }

// method(): show the motto
    showMotto(){
        return(this.motto);
    }

//method: when clicked on the button once: add heart and show additionally name, agem location
    clickImg(){
       return(this.name, this.age, this.location);
    }

}

let hannes  = new Person("live simply", "Hannes Cerry", 29, "Vienna");

let btn = document.getElementsByClassName("btn");

for (let i in persArry){
    btn.addEventListener("click", function(){
      document.getElementsByClassName("imagetext")[i].innerHTML += persArry[i].clickImg();  

    })
}


//in favourites show the full content of the person