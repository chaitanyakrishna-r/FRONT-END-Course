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

function print(a:number, b:string): void{
    console.log(a,b)
}

print(30,"ask");