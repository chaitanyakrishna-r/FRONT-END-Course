

// async function getData() {
//     setTimeout(()=>{
//         console.log("i am data");
//     },3000)
// }

// let output = getData();

let getImg = document.getElementById('img');
let divTitle = document.createElement('div');


//fetch API(application programing interface)

async function getData(){
    // get request or fetch api - async
   let response = await fetch('https://jsonplaceholder.typicode.com/photos');

    //    parse json - async 
   let data = await response.json();
   let dataArr = data[4];
    console.log(dataArr);
    let url = (data[1].url);
    let title = (data[1].title); 
    console.log(title);
    getImg.src = dataArr.url;
    divTitle.innerText = dataArr.title ;
   
}
document.body.appendChild(divTitle);
getData()