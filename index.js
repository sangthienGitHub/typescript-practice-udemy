var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var add = function (a, b) {
    return a + b;
};
var joinStrings = function (a, b) {
    return a + b;
};
var post = {
    title: "Typescript news",
    daysOld: 10,
    published: true
};
var printPost = function (postToPrint) {
    return postToPrint.title + " (" + postToPrint.daysOld + " days old)";
};
printPost(post);
//classes and properties, private and public
var Car = /** @class */ (function () {
    function Car(color, year) {
        this.color = color;
        this.year = year;
    }
    Car.prototype.drive = function () {
        this.pressPedal();
        this.putInGear();
        this.turnWheel();
    };
    Car.prototype.putInGear = function () { };
    Car.prototype.pressPedal = function () { };
    Car.prototype.turnWheel = function () { };
    return Car;
}());
var myCar = new Car("red", 2000);
myCar.drive();
console.log(myCar.color, myCar.year);
//npx typescript --init to create tsconfig.json
var Component = function (target) {
    console.log(target);
};
var Amimal = /** @class */ (function () {
    function Amimal() {
    }
    Amimal = __decorate([
        Component
    ], Amimal);
    return Amimal;
}());
