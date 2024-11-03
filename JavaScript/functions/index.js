
// // how we are creating this function: this is function decalaration
// function greeting(){
//     console.log("greeting How is your day");
// }

// greeting();

// // function expression

// let greet = function(){
//     console.log("expreess");
// }

// greet();

// let greetUs = ()=>{
//     console.log("hello this arrow");
// }
// greetUs();



// function as argument

// function greetMe(greet,firstName){
//     console.log("Hello, ",firstName);
//     greet();
// }

// let greet = ()=>{
//     console.log(" Have a good day ! ");
// }
// greetMe(greet,"chaitanyakrishna");


// returning function
// function solve(num){
//     return function(number){
//         return number*number;
//     }
// }
 
// let ans = solve(5);

// let finalans = ans(10);
// console.log(finalans);

// function in data structure 

// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ]

// let first = arr[0];
// let ans = first(3,5);
// console.log(ans);

function sayName(fName='ckr',lName=fName.toUpperCase()){
    console.log("my name is:",fName,lName);
}
sayName('chaitanya');