const quoteBox = document.getElementById("quote");
const authorBox = document.getElementById("author");
const nextButton = document.getElementsByClassName("next-button")[0];
const main = document.getElementById("container");
const loader = document.getElementById("loader-container");

let apiQuote = [];


function loading(){
    loader.hidden = false;
    main.hidden = true;
}

function loadCompelete(){
    if (!loader.hidden){
        loader.hidden = true;
        main.hidden = false;
    }
}

function getNewQuote(){
    const text = apiQuote[Math.floor(Math.random() * apiQuote.length)];
    const quote = Object.values(text)[0];
    const author = Object.values(text)[1].split(",", 1)[0];

    quoteBox.innerHTML = quote;
    authorBox.innerHTML = author;
}

async function getQuote(){
    const API = "https://type.fit/api/quotes";
    loading();
    try{
        const responce = await fetch(API);
        apiQuote = await responce.json();
        getNewQuote();
        loadCompelete()
    } catch(error){
        console.log(error)
    }
}

nextButton.addEventListener("click", getNewQuote);

getQuote();