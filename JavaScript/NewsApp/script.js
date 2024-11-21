const API_KEY = "6d20093abb344a90b07ee52d95bf38e5"; 
const url = `https://newsapi.org/v2/everything?q=`;

window.addEventListener('load',()=>{
    fetchNews("India");
})
function reload(){
    window.location.reload();
}
async function fetchNews(query) {
    const response = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await response.json();
    console.log(data.articles[2]);
    bindData(data.articles);
}

function bindData(articles){
    const cardsContainer = document.getElementById('cards-container');
    const newCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML = '';
    articles.forEach(article => {
        
        if(!article.urlToImage) return;


        //by using this cloneNode we can clone all inner nodes or inner content in that cards or div
        const cardClone = newCardTemplate.content.cloneNode(true);
        fillData(cardClone,article);
        cardsContainer.appendChild(cardClone);
    });
}

const fillData = (cardClone,article)=>{
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#new-tittle');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc= cardClone.querySelector('#news-desc');

    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone:"Asia/Jakarta"
    })

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML =article.title;
    newsDesc.innerHTML = article.description;
    newsSource.innerHTML=`${article.source.name} 🔹▪🔹 ${date}`;

    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank");
    })

}

let curSelectedNav = null;

function onNavItemClick(id){
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = navItem;
    
    curSelectedNav.classList.add('active');
}


const searchButton = document.getElementById('search-btn');
const searchText = document.getElementById('search-text')

searchButton.addEventListener('click',()=>{
    const query = searchText.value;

    if(!query)return;
    fetchNews(query);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = null;
})