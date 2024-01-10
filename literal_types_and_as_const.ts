// Literal Types
// - Don't know what kind of variables will be use.
// - Make it more strict.

let literalName: "Kim";
let me: "Korean" | "male";

function literalFunc(a: "prop"): 1 | 0 {
  return 1;
}

// Q1
function gameFunc(
  prop: "rock" | "scissors" | "paper"
): ("rock" | "scissors" | "paper")[] {
  let gameArr: ("rock" | "scissors" | "paper")[] = [];
  gameArr.push(prop);
  return gameArr;
}

let data = {
  name: "Kim",
} as const;

function asConst(a: "Kim") {}
asConst(data.name);
