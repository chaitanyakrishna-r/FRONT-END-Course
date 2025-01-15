// class Device{
    
//     company = "samsung";
//     price = 2120;
//     model = "mobile";
// } 

// let d1 = new Device();

class bottle{
    pirce :number = 100;
    constructor(public name: string, public brand: string = "milton"){
    
    }
}

let b1 = new bottle("benten");

class bottleMaker{
    // public name;
    // constructor(name:string){
    //     this.name = name;
    // }
    constructor(public name:string, public price: number){}
}
let b2 = new bottleMaker("ckr",200);


//inheritance 
class metalBottleMaker extends bottleMaker{
public brand: string;
 constructor(name:string,  brand: string){
    super(name,1200);
    this.brand = brand;
 } 
 
//  methods \ behaviour 
 getValue(){
    console.log(this.name);
 }
}

let mb1 = new metalBottleMaker("ckras","eho");
mb1.getValue();

class Users{
    constructor(public name: string, public age :number){

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
    get username(){
        return this.name;
    }
    set username(value: string){
        this.name = value;
    }
 }

let u1 = new Users("ckr",23);
console.log(u1.username);