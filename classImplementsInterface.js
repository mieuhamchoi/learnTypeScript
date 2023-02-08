"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.print = function () {
            return _this.name;
        };
    }
    return Person;
}());
exports.Person = Person;
