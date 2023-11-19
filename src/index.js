import "../src/style.css";
import rainy from "../src/images/rainy.png";
import snowy from "../src/images/snowy.png";
import cloudy from "../src/images/cloudy.png";
import sunny from "../src/images/sunny.png";

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
    const image = document.querySelector("img");
    const name = document.getElementById("name");
    const localTime = document.getElementById("location");
    const region = document.getElementById("region");
    const country = document.getElementById("country");
    const lastUpdated = document.getElementById("lastUpdated");
    const temperatureC = document.getElementById("temperatureC");
    const temperatureF = document.getElementById("temperatureF");
    const text = document.getElementById("text");
    const feelsLikeC = document.getElementById("feelsLikeC");
    const feelsLikeF = document.getElementById("feelsLikeF");
    const cloud = document.getElementById("cloud");
    const humidity = document.getElementById("humidity");
    const windKph = document.getElementById("windKph");
    const windMph = document.getElementById("windMph");
    fetch('https://api.weatherapi.com/v1/current.json?key=e8f61a33b1604c65bb3225134231411&q=' + location, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            name.textContent = "City: " + response.location.name;
            localTime.textContent = "Local time: " + response.location.localtime;
            region.textContent = "Region: " + response.location.region;
            country.textContent = "Country: " + response.location.country;
            temperatureC.textContent = "Temperature (C): " + response.current.temp_c;
            temperatureF.textContent = "Temperature (F): " + response.current.temp_f;
            text.textContent = "Weather: " + response.current.condition.text;
            feelsLikeC.textContent = "Feels like (C): " + response.current.feelslike_c;
            feelsLikeF.textContent = "Feels like (F): " + response.current.feelslike_f;
            cloud.textContent = "Cloud: " + response.current.cloud;
            humidity.textContent = "Humidity: " + response.current.humidity;
            lastUpdated.textContent = "Last updated: " + response.current.last_updated;
            windKph.textContent = "Wind (Kph): " + response.current.wind_kph;
            windMph.textContent = "Wind (Mph): " + response.current.wind_mph;
            if (response.current.condition.text === "Overcast" || "Rain") {
                image.src = rainy;
            } else if (response.current.condition.text === "Snow") {
                image.src = snowy;
            } else if (response.current.condition.text === "Clear") {
                image.src = sunny;
            } else if (response.current.condition.text === "Partly cloudy") {
                image.src = cloudy;
            }
        })
    console.log(text)
});
