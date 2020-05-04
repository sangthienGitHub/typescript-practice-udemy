var ValueContainer = /** @class */ (function () {
    function ValueContainer() {
    }
    return ValueContainer;
}());
var numberWrapper = function (value) {
    return [value];
};
var valueWrapper = function (value) {
    return [value];
};
valueWrapper(10);
valueWrapper(true);
