"use strict";
// Q1
function clean(dirtyArr) {
    let cleanArr = [];
    dirtyArr.forEach((el) => {
        if (typeof el === "string") {
            cleanArr.push(parseFloat(el));
        }
        else {
            cleanArr.push(el);
        }
    });
    // for (let i = 0; i < dirtyArr.length; i++) {
    //   if (typeof dirtyArr[i] === "string") {
    //     cleanArr.push(parseInt(dirtyArr[i]));
    //   } else if (typeof dirtyArr[i] === "number") {
    //     cleanArr.push(dirtyArr[i] as number);
    //   }
    // }
    return cleanArr;
}
// console.log(clean([1, 2, "3", 4, "11"]));
// Q2
function school(teacher) {
    if (typeof teacher.subject === "string") {
        return teacher.subject;
    }
    else if (Array.isArray(teacher.subject)) {
        return teacher.subject[teacher.subject.length - 1];
    }
    else {
        return "Prop TYPE ERROR";
    }
}
console.log(school({ subject: ["science", "art", "korean"] }));
