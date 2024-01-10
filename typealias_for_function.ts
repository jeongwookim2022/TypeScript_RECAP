type Type4Function = (a: string) => number;

let randFunc: Type4Function = function (prop: string) {
  return 1;
};

//

// Q1 - 1
type PlusOne = (a: number) => number;
type ChangeName = (name: string) => void;
let memberInfo: { name: string; plusOne: PlusOne; changeName: ChangeName } = {
  name: "Kim",
  plusOne: (a: number): number => {
    return a + 1;
  },
  changeName: (num: string) => {},
};

// Q1 -2
type MemberInfo2 = {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
};
let memberInfo2: MemberInfo2 = {
  name: "Kim",
  plusOne: (a: number): number => {
    return a + 1;
  },
  changeName: () => {},
};

// Q2
type CutZeroType = (str: string) => string;

let cutZero: CutZeroType = (str) => {
  if (str[0] == "0") {
    str = str.slice(1, str.length);
  }
  return str;
};

type RemoveDashType = (str: string) => number;

let removeDash: RemoveDashType = (str) => {
  // let newStr = str.replace(/-/g, "");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "-") str = str.replace("-", "");
  }
  let ans: number = parseInt(str);
  return ans;
};

// Q3
type Q3Type = (str: string, cz: CutZeroType, rd: RemoveDashType) => void;

let functionThree: Q3Type = (str, cz, rd) => {
  let result1 = cz(str);
  let result2 = rd(result1);

  console.log(result2);
};

functionThree("010-1111-2222", cutZero, removeDash);
