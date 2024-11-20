document.addEventListener("DOMContentLoaded",function(){

const searchButton = document.getElementById("search-btn");
const usernameInput = document.getElementById("user-inputs");
const statsContainer = document.querySelector(".stats-container");
const easyProgressCircle = document.querySelector(".easy-progress");
const mediumProgressCircle = document.querySelector(".medium-progress");
const hardProgressCircle = document.querySelector(".hard-progress");
const easyLabel= document.getElementById('easy-label');
const mediumLabel= document.getElementById('medium-label');
const hardLabel= document.getElementById('hard-label');
const cardStatsContainer = document.querySelector(".stats-card");

// return ture or false based on a regex 
function validateUsername(username){
    if(username.trim()===""){
        alert("Username should not be empty");
        return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching = regex.test(username);
    if(!isMatching){
        alert("Invalid Username");
    }
    return isMatching;
}


async function fetchDetails(username){
    statsContainer.classList.add("hidden");
    

    const url =`https://leetcode-stats-api.herokuapp.com/${username}`;
    try{
        searchButton.textContent= 'Searching..';
        searchButton.disabled = true;
        // statsContainer.classList.add("hidden");


        const response = await fetch(url);
        if(!response.ok){
            throw new Error("unable to fetch the details");
        }
        let parsedData = await response.json();
        console.log(parsedData);

        displayUserData(parsedData);
        
    }catch(err){
        statsContainer.innerHTML= `<p>${err}</p>`;
        
    }
    finally{
        searchButton.textContent= 'Search';
        searchButton.disabled = false;
    }
    statsContainer.classList.remove("hidden");

}

function updateProgress(solved, total, label, circle){
    const progressDegree = (solved/total)*100;
    circle.style.setProperty("--progress-degree", `${progressDegree}%`);
    label.textContent = `${solved}/${total}`;
}

function displayUserData(data){
    const totalQues = data.totalQuestions;
    const totalEasyQues = data.totalEasy;
    const totalMediumQues = data.totalMedium;
    const totalHardQues = data.totalHard;

    const solvedQues = data.totalSolved;
    const solvedEasyQues = data.easySolved;
    const solvedMediumQues = data.mediumSolved;
    const solvedHardQues = data.hardSolved;

    updateProgress(solvedEasyQues,totalEasyQues,easyLabel,easyProgressCircle);
    updateProgress(solvedMediumQues,totalMediumQues,mediumLabel,mediumProgressCircle);
    updateProgress(solvedHardQues,totalHardQues,hardLabel,hardProgressCircle);

    const totalDisplay = document.createElement('div');
    totalDisplay.textContent=`Total Question${totalQues}/${solvedQues}Solved Question
    `;
    statsContainer.appendChild(totalDisplay);

    // console.log(totalQues,totalEasyQues,totalMediumQues,totalHardQues)
    // console.log(solvedQues,solvedEasyQues,solvedMediumQues,solvedHardQues)
    // console.log(Math.round((solvedMediumQues/totalMediumQues)*100));

    const cardsData =[
    {
        label:"AccetanceRate",
        value:data.acceptanceRate
    },{
        label:"Ranking",
        value:data.ranking
    },{
        label:"Contribution",
        value:data.contributionPoints
    },{
        label:"Reputation",
        value:data.reputation
    }]

    console.log(cardsData);
    cardStatsContainer.innerHTML = cardsData.map(
        card =>
        `
        <div class="card">
        <h4>${card.label}</h4>
        <p>${card.value}</p>
        </div>`
    ).join("");
}



searchButton.addEventListener('click',()=>{
    const username = usernameInput.value;
    if(validateUsername(username)){
        fetchDetails(username);
    }
})


// usernameInput.addEventListener('keydown',(e)=>{
//     console.log(e.target.value);
// })










})

// async function leetCode() {
//     let response = await fetch('https://leetcode-stats-api.herokuapp.com/user3881UV'
//         );
//     let data = await response.json();
//     console.log(data);
// }
// leetCode();