// object cloning

// using spread operator

let src = {
    age:12,
    wt:35,
    ht:150
}
let src2 ={
    name:"ck",
    gender:"male"
}
let dest ={}

// let dest = {...src};

// console.log(src);
// src.age=14;
// console.log(src);
// console.log(dest);

// using assign method

// let dest = Object.assign({},src,src2);

// console.log(src);
// src.age=14;
// console.log(src);
// console.log(dest);

// using for loop (iteration)
console.log(src.age);
for(key in src){
    let newKey = key;
    let newValue = src[key];
    console.log(src[key]);

    // inser newkey and value in dest
    dest[newKey] = newValue;
   
}

console.log(src);
console.log(dest);