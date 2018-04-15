const url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
const quoteDiv = document.getElementById('quote');
const authDiv = document.getElementById('author');

const getQuote = () => {
    // console.log('Clicked');
    fetch(url, {cache: "no-cache"})
        .then(response => response.json())
        // .then(quoteObj => console.log(quoteObj))
        .then(function (quoteObj) {
            quoteDiv.innerHTML = quoteObj[0].content;
            authDiv.textContent = `- ${quoteObj[0].title}`;
        })
    colorChange();
}
const body = document.getElementById('body');
const cont = document.getElementById('container');
const quoteBox = document.getElementById('quote-box');
const btn = document.getElementById('btn');

const colorChange = () => {
    let rando = Math.floor(Math.random() * 360 + 1);
    let contColor= `hsl(${rando}, 60%, 50%)`;
    let bodyColor = `hsl(${rando}, 78%, 63%)`;
    let quoteBoxColor = `hsl(${rando}, 40%, 85%)`;
    let btnColor = `hsl(${rando}, 60%, 40%)`;
    console.log('colorchange');
    body.style.backgroundColor = bodyColor;
    cont.style.backgroundColor = contColor;
    quoteBox.style.backgroundColor = quoteBoxColor;
    btn.style.backgroundColor = quoteBoxColor;
}

btn.addEventListener("click", getQuote);