let arr: number[] = [1,2,3];


//tuples 
let arr2: [string, number, number?] = ["ckr",20, 12];
console.log(arr2[2]);

//enums
enum UserProfile{
    ADMIN = "admin",
    SUPERADMIN = "super_admin",
}

enum StatusCodes{
    ABANDONED = "abandoned status code 500",
}

//any , unknown, void

function abcd(): void{
    console.log("hello");
}

//types inference
let z = 12;
//automatically ts will know this type of number
//type annotation
let u:number = 20;

function customPrint(a:number, b:string){
    console.log(a,b)
}




// interface
interface User{
    name:String,
    emial:String,
    age?:number,//optional
}

//mandatory to give all arguments as user 
function abc(obj: User){

}
abc({name:"ckr",emial:"chaitany@gmail.com",age:24});

interface Admin extends User{
    admin:boolean,
    password:number | string;
}

function zyx(obj: Admin){

}

//type aliases

type argu = string| number| null;

let a : argu ;
a = "ck";

//intersection types

type ab = {
    name:string,
    email:string
}

// Intersection 
type admin = ab & {
    admin: boolean

}

