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
    const img = document.createElement("img");
    const cloud = document.createElement("p");
    const country = document.createElement("p");
    const localTime = document.createElement("p");
    const name = document.createElement("p");
    const region = document.createElement("p");
    const text = document.createElement("p");
    const feelsLikeC = document.createElement("p");
    const feelsLikeF = document.createElement("p");
    const humidity = document.createElement("p");
    const lastUpdated = document.createElement("p");
    const temperatureC = document.createElement("p");
    const temperatureF = document.createElement("p");
    const windKph = document.createElement("p");
    const windMph = document.createElement("p");

    fetch('https://api.weatherapi.com/v1/current.json?key=e8f61a33b1604c65bb3225134231411&q=' + location, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            cloud.textContent = "Cloud: " + response.current.cloud;
            country.textContent = "Country: " + response.location.country;
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
            document.body.appendChild(cloud);
            document.body.appendChild(country);
            document.body.appendChild(localTime);
            document.body.appendChild(name);
            document.body.appendChild(region);
            document.body.appendChild(text);
            document.body.appendChild(feelsLikeC);
            document.body.appendChild(feelsLikeF);
            document.body.appendChild(humidity);
            document.body.appendChild(temperatureC);
            document.body.appendChild(temperatureF);
            document.body.appendChild(windKph);
            document.body.appendChild(windMph);
            document.body.appendChild(lastUpdated);
        })
        .catch(e => {
            console.log(e);
        })
        
});