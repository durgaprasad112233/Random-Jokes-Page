let paragraphEl = document.getElementById("jokeText");
let buttonEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function generateJoke() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    paragraphEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let joke = jsonData.value;
            spinnerEl.classList.add("d-none");
            paragraphEl.classList.remove("d-none");
            paragraphEl.textContent = joke;
        });
}

buttonEl.addEventListener("click", generateJoke);