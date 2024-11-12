
// let firstPromise = new Promise((resolve, reject)=>{
//     console.log("ckR");
//     reject(new Error("sever down"));
// });



// let firstPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("ckr");
//     },10000);
// });


// using then and catch
let promise1 = new Promise((resolve, reject)=>{
    let success = false;
    if(success){
        resolve ( "promis fulfilled");
    }else{
        reject("promise rejected");
    }
});

promise1.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})