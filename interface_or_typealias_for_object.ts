// When the data type is Object Type
// - (1) type alias
type Square = { color: string; width: number };

// OR

// - (2) interface
interface Square2 {
  color: string;
  width: number;
}

let square = {
  color: "red",
  width: 100,
};

///////////////////////////////////////////////////

// Q1
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let student: Student = { name: "Kim" };
let teacher: Teacher = { name: "Lee", age: 35 };

////////////////////////////////////////////////////

// Intersection type
type Animal = { name: string };
type Cat = Animal & { age: number };

////////////////////////////////////////////////////

// Difference Between type & interface.
// - interface can be declared multiple times,
//   so Automatically extended.
// - type can't
// ex)
interface Phone {
  model: string;
}
interface Phone {
  price: number;
}
let phone: Phone = { model: "Galaxy", price: 1000 };

/////////////////////////////////////////////////////

// Q1
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

// Q2
interface Cart {
  product: string;
  price: number;
}

let cartTest: Cart[] = [
  { product: "Samsung Phone", price: 1000 },
  { product: "Dyson", price: 1000 },
];

// Q3
interface CartNew extends Cart {
  card: boolean;
}

// Q4
interface TwoFunctions {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let Q4: TwoFunctions = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};

console.log(Q4.plus(1, 4));
console.log(Q4.minus(10, 3));
