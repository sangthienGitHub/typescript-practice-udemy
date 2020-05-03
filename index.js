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
//classes and properties
var Car = /** @class */ (function () {
    function Car(color, year) {
        this.color = color;
        this.year = year;
    }
    Car.prototype.drive = function () {
        console.log("Vroom");
    };
    return Car;
}());
var myCar = new Car("red", 2000);
myCar.drive();
console.log(myCar.color, myCar.year);
