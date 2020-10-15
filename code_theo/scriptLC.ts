const studentArr:Array<any>=[];


class Students{
	name:string;
	age:number;
	job:string;
	pets:string;


	constructor(a, b, c,d){
		this.name=a;
		this.age=b;
		this.job=c;
		this.pets=d;
		studentArr.push(this);
	}

	render(){
		return `<div class="col-4 bg-light">
		<p>${this.name}</p>
		<p>${this.age}</p>
		<p>${this.job}</p>
		<button class="btns btn btn-primary">click for more</button>
		<p class="moreInfo"></p>
		</div>`
	}

	renderMore(){
		return `<div>more Info here ${this.pets}</div>`
	}
}

let student1=new Students("mary", 20, "doctor","dogs");
new Students("jane", 30, "doctor","cats");
new Students("mikey", 50, "nurse","monkeys");


console.log(studentArr)

for(let i in studentArr){
	document.getElementById("result").innerHTML += studentArr[i].render();
}

let btns=document.getElementsByClassName("btns");

for(let i in studentArr){
	btns[i].addEventListener("click", function(){
		document.getElementsByClassName("moreInfo")[i].innerHTML= studentArr[i].renderMore()
	})
}