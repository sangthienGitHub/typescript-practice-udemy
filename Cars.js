"use strict";
exports.__esModule = true;
var Cars = /** @class */ (function () {
    function Cars() {
        this.year = 10;
    }
    Cars.prototype.drive = function (speed) {
        // error in strict mode, to fix it add a type to it --> speed: number
        console.log("Driving at " + speed);
    };
    return Cars;
}());
exports.Cars = Cars;
var myCar = new Cars();
console.log(myCar.year);
