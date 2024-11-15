
// // create of promise
// const ticket = new Promise(function(resolve, reject){
//     let isBoarded = true;
//     if(isBoarded){
//         resolve("you are not in the Flight");
//     }else{
//         reject(" your flight has been cancelled");
//     }
// })

// //using of promise
// ticket.then((message)=>{
//     console.log("whooo",message);
// }).catch((error)=>{
//     console.log("oo No",error);
// }).finally(()=>{
//     console.log("thanks you ")
// })

const getCheese = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const cheese = '🧀';
            resolve(cheese);
        },5000)
    })
}
const makeDough = (cheese) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dough = cheese + '🫓';
            // resolve(dough);
            reject("bad cheese")
        },5000)
    })
}
const bakePizza = (dough) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const pizza = dough + '🍕';
            resolve(pizza);
        },5000)
    })
}

getCheese().then((cheese)=>{
    console.log("here is the cheese",cheese);
    return makeDough(cheese);
}).then((dough)=>{
    console.log("dough is ready",dough);
    return bakePizza(dough);
}).then((pizza)=>{
    console.log("your Pizza is ready",pizza);
}).catch((data)=>{
    console.log(data);
}).finally(()=>{
    console.log("thank you for buying");
})