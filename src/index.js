import "../src/style.css";

const form = document.getElementById("location-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = document.getElementById("location").value;
    result.textContent = `${location}`;
    form.reset();
    console.log(location);
});
