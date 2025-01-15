"use strict";
// class Device{
//     company = "samsung";
//     price = 2120;
//     model = "mobile";
// } 
// let d1 = new Device();
class bottle {
    constructor(name, brand = "milton") {
        this.name = name;
        this.brand = brand;
        this.pirce = 100;
    }
}
let b1 = new bottle("benten");
class bottleMaker {
    // public name;
    // constructor(name:string){
    //     this.name = name;
    // }
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b2 = new bottleMaker("ckr", 200);
//inheritance 
class metalBottleMaker extends bottleMaker {
    constructor(name, brand) {
        super(name, 1200);
        this.brand = brand;
    }
    //  methods \ behaviour 
    getValue() {
        console.log(this.name);
    }
}
let mb1 = new metalBottleMaker("ckras", "eho");
mb1.getValue();
class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //     //getter funtion /methods
    //     getName(){
    //         return this.name;
    //     }
    //     //setter funtion 
    //     setName(value: string){
    //         this.name = value;
    //     }
    // use get and set
    get username() {
        return this.name;
    }
    set username(value) {
        this.name = value;
    }
}
let u1 = new Users("ckr", 23);
console.log(u1.username);
