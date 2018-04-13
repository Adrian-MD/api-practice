// const url = "https://talaikis.com/api/quotes/random/";
        
// const getQuote = () => {
//     // console.log('Clicked');
//     fetch(url)
//         .then(response => response.json())
//         // .then(quoteObj => console.log(quoteObj))
//         .then(function (quoteObj) {
//             const quoteDiv = document.getElementById('quote');
//             const authDiv = document.getElementById('author');
//             quoteDiv.textContent = quoteObj.quote;
//             authDiv.textContent = `- ${quoteObj.author}`;
//         })

// }
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



const colorChange = () => {
    const bodyBG = document.getElementById('body');
    const contBG = document.getElementById('container');
    const quoteBoxBG = document.getElementById('quote-box');
    const btnBG = document.getElementById('btn');
    let rando = Math.floor(Math.random() * 360 + 1);
    let contColor= `hsl(${rando}, 60%, 50%)`;
    let bodyColor = `hsl(${rando}, 78%, 63%)`;
    let quoteBoxColor = `hsl(${rando}, 40%, 85%)`;
    let btnColor = `hsl(${rando}, 60%, 40%)`;
    console.log('colorchange');
    bodyBG.style.backgroundColor = bodyColor;
    contBG.style.backgroundColor = contColor;
    quoteBoxBG.style.backgroundColor = quoteBoxColor;
    btnBG.style.backgroundColor = quoteBoxColor;
}