"use strict";
let square = {
    color: "red",
    width: 100,
};
let student = { name: "Kim" };
let teacher = { name: "Lee", age: 35 };
let phone = { model: "Galaxy", price: 1000 };
let cartTest = [
    { product: "Samsung Phone", price: 1000 },
    { product: "Dyson", price: 1000 },
];
let Q4 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
console.log(Q4.plus(1, 4));
console.log(Q4.minus(10, 3));
