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
    const cloud = document.getElementById("cloud");
    const country = document.getElementById("country");
    const localTime = document.getElementById("location");
    const name = document.getElementById("name");
    const region = document.getElementById("region");
    const text = document.getElementById("text");
    const feelsLikeC = document.getElementById("feelsLikeC");
    const feelsLikeF = document.getElementById("feelsLikeF");
    const humidity = document.getElementById("humidity");
    const lastUpdated = document.getElementById("lastUpdated");
    const temperatureC = document.getElementById("temperatureC");
    const temperatureF = document.getElementById("temperatureF");
    const windKph = document.getElementById("windKph");
    const windMph = document.getElementById("windMph");
    fetch('https://api.weatherapi.com/v1/current.json?key=e8f61a33b1604c65bb3225134231411&q=' + location, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            cloud.textContent = "Cloud: " + response.current.cloud;
            localTime.textContent = "Local time: " + response.location.localtime;
            name.textContent = "City: " + response.location.name;
            region.textContent = "Region: " + response.location.region;
            text.textContent = "Weather: " + response.current.condition.text;
            feelsLikeC.textContent = "Feels like (C): " + response.current.feelslike_c;
            feelsLikeF.textContent = "Feels like (F): " + response.current.feelslike_f;
            humidity.textContent = "Humidity: " + response.current.humidity;
            lastUpdated.textContent = "Last updated: " + response.current.last_updated;
            temperatureC.textContent = "Temperature (C): " + response.current.temp_c;
            temperatureF.textContent = "Temperature (F): " + response.current.temp_f;
            windKph.textContent = "Wind (Kph): " + response.current.wind_kph;
            windMph.textContent = "Wind (Mph): " + response.current.wind_mph;
            country.textContent = "Country: " + response.current.cloud;
        })
});