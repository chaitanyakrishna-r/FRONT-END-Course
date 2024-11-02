

function sayMyName(){
    console.log("hello chaitanyakrishan ");
}
// sayMyName();

function countHunder(){
    for(let i=1; i<=100; i++){
        console.log(i);
    }
}


// return functions
function getSum(a, b, c){
    let sum = a+b+c;
    return sum;
}

// let ans = getSum(5,6,7);

// console.log("answer of the sum is ", ans);

const getMultiplication = function(num1, num2){
 return num1*num2;
}

console.log(getMultiplication(5,2));

// arrow fuctions

let getSquare = (num)=>{
    return num**2;
}

console.log(getSquare(5));

let getsumof = ()=>{
    
}