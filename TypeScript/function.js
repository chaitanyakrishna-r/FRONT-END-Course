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
    //this call type narrowing
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
function ui(a, b) {
    return "hey"; //accpets or
    return "hey"; //both are same as above
    // return "hey" ;//not accpets
    // return T;//accpets
}
ui("Hey", "hello");
// types Assertion
let a2;
a2 = 123;

//type guards
function qwe(arg) {
    if (typeof arg === "string") {
    }
}
qwe(12);
qwe("ckr");
//class
class Tvremote {
    switchTvOff() {
        console.log("switching off Tv remote");
    }
}
class CarRemote {
    switchCarOff() {
        console.log("switching off car remote");
    }
}
//using instanceof
function switchOff(device) {
    if (device instanceof Tvremote) {
        device.switchTvOff();
    }
    else if (device instanceof CarRemote) {
        device.switchCarOff();
    }
}
//instaces
let tv1 = new Tvremote();
let car1 = new CarRemote();
switchOff(tv1);
