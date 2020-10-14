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
var Vehicles = /** @class */ (function () {
    function Vehicles(price, model, horsePower, yearsOfProduction) {
        this.price = price;
        this.model = model;
        this.horsePower = horsePower;
        this.yearsOfProduction = yearsOfProduction;
    }
    Vehicles.prototype.calculation = function () {
        this.price = this.horsePower * 2 + (2020 - this.yearsOfProduction) * 1.4;
        console.log("The price of " + this.model + " is: " + this.price + " ");
        return this.price;
    };
    return Vehicles;
}());
var volvo = new Vehicles(15000, "volvo", 150, 1999);
console.log(volvo.calculation());
var calculationResult = document.getElementById("result-mb"); /*as HTMLInputElement;*/
calculationResult.innerHTML = volvo.calculation();
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(price, model, horsePower, yearsOfProduction, numberWheel) {
        var _this = _super.call(this, price, model, horsePower, yearsOfProduction) || this;
        _this.numberWheel = "";
        _this.numberWheel = numberWheel;
        return _this;
    }
    return Motorbike;
}(Vehicles));
/*document.getElementsByClassName("result-mb").innerHTML(`The price of ${this.model} is: ${this.price} `);*/
$;
