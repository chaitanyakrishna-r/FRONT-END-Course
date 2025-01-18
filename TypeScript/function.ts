
function abcd(name: string, cb: (value:string)=>void):void{
    const value = "hello";
    cb(value);
}

abcd("ckr",(value: string)=>{
    console.log("e",value);
    
})

function xyz(name:string, cb:(value:string)=>void):void{

}
//optional and default parameters
//gender:string = "dont want to disclose"-->>default
function user(name:string, age:number, gender?:string){
    console.log(name,age, gender);
}
user("ckr",25,"male");

//Rest parametes

function many(...args:number[]){
    console.log(args);
}

many(1,2,3,4,5,6);

//overloading

//ts function signature define
function ab(a:string):void;
function ab(a:string, b:number): number;

function ab(a:any, b?:any):any{

    //this call type narrowing
    if(typeof a === "string" &&  b === undefined){
        console.log(a,"funciton 1");
    } 
    if(typeof a === "string" && typeof b === "number"){
        console.log(a,b,"funciton 2");
        return 123;
    }else{
        console.log('e');
    }
   
}
ab("hello how are you");
ab("hey hi",123);

//generics
function logging<T>(value:T){
    console.log(value);
}

logging("ckr");//typescript will know it selft
logging<number>(132);
//generic interface

interface user<T>{
    name:string,
    age:number,
    key:T,
}

function userName(obj:user<string>){
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.key);
}
userName({name:"ckr",age:12,key:"heo23"});
console.log('he')

//generic class

class bottles<T>{
    constructor(public key:T){

    }
}
let bs1 = new bottles("milton");
let bs2 = new bottles<number>(12);

function ui<T>(a:T,b:T):T{
    return "hey" as T;//accpets or
    return <T> "hey"; //both are same as above
    // return "hey" ;//not accpets
    // return T;//accpets
}
ui<string>("Hey","hello");

// types Assertion
let a2:any;
(a2 as number) = 123;
(<number> a)= 12;

//type guards
function qwe(arg:string | number){
    if(typeof arg === "string"){
        
    }
}
qwe (12);
qwe ("ckr");
//class
class Tvremote{
    switchTvOff(){
        console.log("switching off Tv remote");
    }
}

class CarRemote{
    switchCarOff(){
        console.log("switching off car remote");
    }
}

//using instanceof
function switchOff(device: Tvremote | CarRemote){
    if(device instanceof Tvremote){
        device.switchTvOff();
    }
    else if(device instanceof CarRemote){
        device.switchCarOff();
    }
}

//instaces
let tv1 = new Tvremote();
let car1 = new CarRemote();

switchOff(tv1);