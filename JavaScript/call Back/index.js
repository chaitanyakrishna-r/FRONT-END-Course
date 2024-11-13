
const cheese = (callback)=>{
    setTimeout(()=>{
        let cheese = '🧀';
        console.log("cheese is ready ",cheese);
        callback(cheese);
    },5000)//5 sec
}

const dough = (cheese,callback)=>{
    setTimeout(()=>{
        let dough = cheese +'🫓';
        console.log("dough is ready", dough);
        callback(dough);
    },5000)
}

const pizza = (dough, callback)=>{
    setTimeout(()=>{
        let pizza = dough + '🍕';
        console.log("pizza is ready", pizza);
        callback(pizza);
    },5000)
} 


cheese((cheese)=>{
    console.log("got the cheese",cheese);
    dough(cheese,(dough)=>{
        console.log("got the dough",dough);
        pizza(dough,(pizza)=>{
            console.log("got the dough",pizza);
        });
    })
});