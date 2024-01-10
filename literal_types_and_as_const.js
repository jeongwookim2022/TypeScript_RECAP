"use strict";
// Literal Types
// - Don't know what kind of variables will be use.
// - Make it more strict.
let literalName;
let me;
function literalFunc(a) {
    return 1;
}
// Q1
function gameFunc(prop) {
    let gameArr = [];
    gameArr.push(prop);
    return gameArr;
}
let data = {
    name: "Kim",
};
function asConst(a) { }
asConst(data.name);
