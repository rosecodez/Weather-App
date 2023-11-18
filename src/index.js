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
    let data = fetch('https://api.weatherapi.com/v1/current.json?key=e8f61a33b1604c65bb3225134231411&q=' + location, {mode: 'cors'})
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
function displayItems() {

}
function createLocation() {
    let country = document.createElement("p");
    let localTime = document.createElement("p");
    let name = document.createElement("p");
    let region = document.createElement("p");
    let cloud = document.createElement("p");
    let text = document.createElement("p");
    let feelsLikeC = document.createElement("p");
    let feelsLikeF = document.createElement("p");
    let humidity = document.createElement("p");
    let lastUpdated = document.createElement("p");
    let temperatureC = document.createElement("p");
    let temperatureF = document.createElement("p");
    let windDirection = document.createElement("p");
    let windKph = document.createElement("p");
    let windMph = document.createElement("p");
}
createLocation();
