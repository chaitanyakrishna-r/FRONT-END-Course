let mydiv = document.querySelector('#mydiv');

let MHeading = document.createElement('span');
MHeading.textContent = 'My name is ckr';

mydiv.insertAdjacentElement('beforebegin',MHeading);

// let parent = document.querySelector('#mydiv');
let child = document.querySelector('#tpara');
let parent = child.parentElement;

parent.removeChild(child);