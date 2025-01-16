"use strict";
function abcd(name, cb) {
    const value = "hello";
    cb(value);
}
abcd("ckr", (value) => {
    console.log("e", value);
});
function xyz(name, cb) {
}
//optional and default parameters
//gender:string = "dont want to disclose"-->>default
function user(name, age, gender) {
    console.log(name, age, gender);
}
user("ckr", 25, "male");
//Rest parametes
function many(...args) {
    console.log(args);
}
many(1, 2, 3, 4, 5, 6);
function ab(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log(a, "funciton 1");
    }
    if (typeof a === "string" && typeof b === "number") {
        console.log(a, b, "funciton 2");
        return 123;
    }
    else {
        console.log('e');
    }
}
ab("hello how are you");
ab("hey hi", 123);
//generics
function logging(value) {
    console.log(value);
}
logging("ckr"); //typescript will know it selft
logging(132);
function userName(obj) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.key);
}
userName({ name: "ckr", age: 12, key: "heo23" });
console.log('he');
//generic class
class bottles {
    constructor(key) {
        this.key = key;
    }
}
let bs1 = new bottles("milton");
let bs2 = new bottles(12);
