// Q1
type a = { q: string; w: number };
type b = { q: string; c: number };
type plus = a & b;

let test1: a = { q: "q", w: 1 };
let test2: b = { q: "q", c: 1 };
let test3: plus = { q: "q", w: 3, c: 3 };

console.log("t1:", test1);
console.log("t2:", test2);
console.log("t3:", test3);

// Q2 - type alias
type RandomObj = { color?: string; size: number; readonly position: number[] };

// Q3
type Info = { name: string; phone: number; email: string };

// Q4
type IsunderAge = { isUnderAge: boolean };
type NewInfo = Info & IsunderAge;
