import "../src/style.css";

const form = document.getElementById("location-form");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = document.getElementById("location").value;
    result.textContent = `Searched: ${location}`;
    form.reset();
});

submit.addEventListener("click", () => {
    const location = document.getElementById("location").value;
    fetch('https://api.weatherapi.com/v1/current.json?key=e8f61a33b1604c65bb3225134231411&q=' + location, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(e => {
            console.log(e);
        });
});
