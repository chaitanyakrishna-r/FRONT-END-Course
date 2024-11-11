
// let changeText= (eve)=>{
//     let fpara = document.querySelector('#fpara');
//     console.log(eve)
//     fpara.innerText= 'This is Chaitanya Krishna'
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click',changeText);



// default case

// let anchorElement = document.querySelector('#fanchor');

// function changeText(event){
//     // event.preventDefault();
//     console.log('click me');
//     anchorElement.innerText = 'click me';
// }

// anchorElement.addEventListener('click',changeText);
// let mydiv = document.querySelector('#wrapper');

// let paras = mydiv.querySelectorAll('p');

function showAlert(event){
    if(event.target.nodeName !='DIV'){
        console.log(event.target);
    }
}
// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     console.log('added')
//     para.addEventListener('click',showAlert)
// }

let mydiv = document.querySelector('#wrapper');
mydiv.addEventListener('click',showAlert);