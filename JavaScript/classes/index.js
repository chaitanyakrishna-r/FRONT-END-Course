//to create a class

class Human{
    //properties
    name = "chaitanya"
    age =25;
    #wt = 65;
    gender = "male";//private

    // basically it is used to update the values

    constructor(NewName, newAge, Newwt){
        this.name = NewName;
        this.age = newAge;
        this.#wt = Newwt;
    }
    
    // behaviour
    walking(){
        console.log("I'm walking ");
    
    }

    running(){
        console.log("i can run");
    }
    get fetchWt(){
        return this.#wt;
    }
    set modifyWt(valu){
        this.#wt=valu
    }
    
}

let obj = new Human("ck",20,70);

console.log(obj.name);
console.log(obj.age);
console.log(obj.fetchWt);
obj.modifyWt = 29;
console.log(obj.fetchWt);
// obj.running();


// console.log(obj.fetchWt);
// obj.modifyWt =78 ;


// console.log(obj.fetchWt);