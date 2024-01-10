"use strict";
let randFunc = function (prop) {
    return 1;
};
let memberInfo = {
    name: "Kim",
    plusOne: (a) => {
        return a + 1;
    },
    changeName: (num) => { },
};
let memberInfo2 = {
    name: "Kim",
    plusOne: (a) => {
        return a + 1;
    },
    changeName: () => { },
};
let cutZero = (str) => {
    if (str[0] == "0") {
        str = str.slice(1, str.length);
    }
    return str;
};
let removeDash = (str) => {
    // let newStr = str.replace(/-/g, "");
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "-")
            str = str.replace("-", "");
    }
    let ans = parseInt(str);
    return ans;
};
let functionThree = (str, cz, rd) => {
    let result1 = cz(str);
    let result2 = rd(result1);
    console.log(result2);
};
functionThree("010-1111-2222", cutZero, removeDash);
