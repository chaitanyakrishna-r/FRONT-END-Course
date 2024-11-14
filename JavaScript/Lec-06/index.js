

//code 1
let t1 = performance.now();

for(let i=1; i<=50; i++){
    let para = document.createElement('p');
    para.innerText= 'this is para no: '+ i;
    document.body.appendChild(para);
}

let t2 = performance.now();
console.log("the performance of code 1 is :" + (t2-t1));

//code 2
let t3 = performance.now();

let mydiv = document.createElement('div');
for(let i =1; i<=50; i++){
    let para = document.createElement('p');
    para.innerText= "This is para no: "+ i;
    // mydiv.insertAdjacentElement('beforeend',para);
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

let t4 = performance.now();
console.log("the performance of code 1 is :" + (t4-t3));


// best practices
let t5 = performance.now();
let fargment = document.createDocumentFragment();

for(let i=1; i<=50; i++){
    let para = document.createElement('p');
    para.innerText= "this is para "+ (i+100);
    fargment.appendChild(para);
}

document.body.appendChild(fargment);

let t6 = performance.now();
console.log("the performance of code 3 is :" + (t6-t5));