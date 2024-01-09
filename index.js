"use strict";
let nameTest = "Kim";
let nameArr = ["Kim", "Lee"];
let numArr = [1, 2, 3];
let nameObj = { name: "Kim" };
let nameObj2 = {};
let strORnum = 123;
let strORnum2 = "str";
let typeTest = 1;
let typeTest2 = "str";
// Type in Function
function testFunc(param) {
  return param * 2;
}
let john = [1, true];
let p1 = { name: "Karin" };
let p2 = { name: "Abba", address: "Stockholm" };

// Type for Class
class User {
  constructor(name) {
    this.name = name;
  }
}

// Types
let info = {
  name: "Kim",
  age: 26,
  from: "Korea",
};

// Types: |(union), any, unknown
let q = [];
let q2 = {};
let anything;
let anything2;
// string|number는 union type으로 만든 새로운 타입이므로
// operator 연산이 불가능함. 오직 number 또는 string만 가능.
let test; // test -1 => Error
// unknown
// unknownTest -1 => Error
let unknownTest = 1;
// Q1
let user = "kim";
let age = undefined;
let married = false;
let 철수 = [user, age, married];
// 함수에 type 지정
function funcTest(x) {
  return x * 2;
}
function funcTest2(x) {
  console.log(x * 2);
}
function funcTest3(x) {} // x?: number = x: number|undefined
// Q1
function p1func(name) {
  if (name == undefined) return "No Name.";
  else return `Hi, I'm ${name}.`;
}
// Q2
function p2func(num) {
  return num.toString().length;
  // let numStr: string = num.toString();
  // let ans: number = 0;
  // for (let i = 0; i < numStr.length; i++) {
  //   ans += 1;
  // }
  // return ans;
}
// Q3
function marryOk(income, house, charm) {
  let total = 0;
  if (income >= 1) total += income;
  if (house == true) total += 500;
  if (charm == "상") total += 100;
  if (total >= 600) return "MARRY OK";
}
// Q - narrowing: 엄격하게
// function narrowingTest(x: number | string): void {
//   if (typeof x == number) {
//     console.log(x + 2);
//   }
// }
