try{
    console.log("try block starts here");
    console.log(x);
    console.log("try block ends here");
}
catch(e){
    console.log("Inside catch block");
    throw new Error("declar the variable first to use it ");
    // console.log("found some error",e);

}
finally{
    console.log("i will run everytime");
}

// throw key word 

let number =100;
if (number == 100){
    throw new Error("invalid password");
}