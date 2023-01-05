"use strict";
// Basic types
let id = 5;
let myName = "Cristyan";
let isMarried = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'Cristyan', true];
// Tuple Array
let employee;
employee = [
    [1, 'Cristyan'],
    [2, 'Yusmely'],
    [3, 'Crismely'],
];
// Union Types
let pid;
pid = '22';
// Enum Number
var DirectionNumber;
(function (DirectionNumber) {
    DirectionNumber[DirectionNumber["Up"] = 1] = "Up";
    DirectionNumber[DirectionNumber["Down"] = 2] = "Down";
    DirectionNumber[DirectionNumber["Left"] = 3] = "Left";
    DirectionNumber[DirectionNumber["Right"] = 4] = "Right";
})(DirectionNumber || (DirectionNumber = {}));
// Enum String
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "Arriba";
    DirectionString["Down"] = "Abajo";
    DirectionString["Left"] = "Izquierda";
    DirectionString["Right"] = "Derecha";
})(DirectionString || (DirectionString = {}));
console.log(DirectionNumber.Up);
console.log(DirectionString.Up);
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNumber(x, y) {
    return x + y;
}
const substractNumber = (x, y) => {
    return x - y;
};
const log = (message) => {
    console.log(message);
};
log("La suma de 123.50 + 30.20");
log(addNumber(123.50, 30.20));
const user1 = {
    id: 1,
    name: 'John',
};
user1.age = 41;
console.log("ID: ", user1.id);
console.log("Name: ", user1.name);
console.log("Edad: ", user1.age);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const cris = new Person(1, 'Cristyan');
const mely = new Person(2, 'Yusmely');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Juan", "Dev");
console.log(emp.position);
console.log(emp.register());
