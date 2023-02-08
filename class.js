"use strict";
// class
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // public name: string
    // private age: number
    // readonly male: boolean
    // constructor(n:string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.seen = function () {
        return {
            name: this.name,
            age: this.age,
            male: this.male
        };
    };
    return Employee;
}());
exports.Employee = Employee;
var b = new Employee('henry', 30, true);
console.log(b);
console.log(b.name);
//console.log(b.age)
console.log(b.male);
b.name = "nam";
console.log(b.name);
console.log(b.seen());
