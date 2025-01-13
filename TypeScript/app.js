"use strict";
let arr = [1, 2, 3];
//tuples 
let arr2 = ["ckr", 20, 12];
console.log(arr2[2]);
//enums
var UserProfile;
(function (UserProfile) {
    UserProfile["ADMIN"] = "admin";
    UserProfile["SUPERADMIN"] = "super_admin";
})(UserProfile || (UserProfile = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
})(StatusCodes || (StatusCodes = {}));
//any , unknown, void
function abcd() {
    console.log("hello");
}
//types inference
let z = 12;
//automatically ts will know this type of number
//type annotation
let u = 20;
function print(a, b) {
    console.log(a, b);
}
print(30, "ask");
