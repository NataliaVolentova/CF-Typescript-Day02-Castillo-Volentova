class Vehicles {
    price : number;
    model : string;
    horsePower : number;
    yearsOfProduction : number;

    constructor(price: number, model: string, horsePower: number, yearsOfProduction: number){
        this.price = price;
        this.model = model;
        this.horsePower = horsePower;
        this.yearsOfProduction = yearsOfProduction;
    }
    calculation(){
        this.price = this.horsePower *2 + (2020-this.yearsOfProduction)*1.4;
        console.log(`The price of ${this.model} is: ${this.price} `);
        return this.price;
    }
}


let volvo = new Vehicles (15000, "volvo", 150, 1999);
console.log(volvo.calculation());

let calculationResult = <HTMLElement>document.getElementById("result-mb") /*as HTMLInputElement;*/
calculationResult.innerHTML= volvo.calculation();



class Motorbike extends Vehicles {
    numberWheel= "";
constructor (price, model, horsePower, yearsOfProduction, numberWheel ){
    super(price, model, horsePower, yearsOfProduction);
    this.numberWheel = numberWheel;
}

}


/*document.getElementsByClassName("result-mb").innerHTML(`The price of ${this.model} is: ${this.price} `);*/

$



    