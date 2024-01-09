let nameTest: string = "Kim";
let nameArr: string[] = ["Kim", "Lee"];
let numArr: number[] = [1, 2, 3];
let nameObj: { name?: string } = { name: "Kim" };
let nameObj2: { name?: string } = {};

let strORnum: string | number = 123;
let strORnum2: string | number = "str";

// TYPE as a variable
type Type1 = string | number;
let typeTest: Type1 = 1;
let typeTest2: Type1 = "str";

// Type in Function
function testFunc(param: number): number {
  return param * 2;
}

// Type for array or object.
type Member = [number, boolean];
let john: Member = [1, true];

type Member2 = {
  name: string;
};
let p1: Member2 = { name: "Karin" };

type Member3 = {
  [key: string]: string;
};
let p2: Member3 = { name: "Abba", address: "Stockholm" };

// Type for Class
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Types
let info: { name: string; age: number; from: string } = {
  name: "Kim",
  age: 26,
  from: "Korea",
};

type Project = {
  member: string[];
  days: number;
  started: boolean;
};

// Types: |(union), any, unknown
let q: (number | string)[] = [];
let q2: { [key: number | string]: number | string } = {};

let anything: any;
let anything2: unknown;

// string|number는 union type으로 만든 새로운 타입이므로
// operator 연산이 불가능함. 오직 number 또는 string만 가능.
let test: number | string; // test -1 => Error

// unknown
// unknownTest -1 => Error
let unknownTest: unknown = 1;

// Q1
let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

// Q2
type q2 = {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
};

// 함수에 type 지정
function funcTest(x: number): number {
  return x * 2;
}
function funcTest2(x: number): void {
  console.log(x * 2);
}
function funcTest3(x?: number): void {} // x?: number = x: number|undefined

// Q1
function p1func(name?: string): string {
  if (name == undefined) return "No Name.";
  else return `Hi, I'm ${name}.`;
}

// Q2
function p2func(num: string | number): number {
  return num.toString().length;
  // let numStr: string = num.toString();
  // let ans: number = 0;
  // for (let i = 0; i < numStr.length; i++) {
  //   ans += 1;
  // }
  // return ans;
}
// Q3
function marryOk(income: number, house: boolean, charm: string): string | void {
  let total: number = 0;
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
