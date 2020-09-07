const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quotes = document.getElementById("quote");
const button = document.querySelector("#btnQuote");
var currentQuote = '';




function generateQuote(data) {
    fetch(url)
        .then(resp => resp.json())
        .then(function (data) {
            quotes.innerHTML = `"${data[0]}"`;
            currentQuote = `"${data[0]}"`;

        })
        .catch(function (error) {
            console.log(error)
        })
}

generateQuote();
button.onclick = generateQuote;
