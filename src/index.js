import "./normalize.css";
import "./styles.css";
import { fetchWeather } from "./api-access";

function getLocation() {
    const searchInput = document.querySelector(".search-bar");
    searchInput.addEventListener("change", () => {
        const location = searchInput.value.trim();
        if (!location) return;
        fetchWeather(location);
        searchInput.value = "";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    getLocation();
});

// TO DO:
// - Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
// - Toggle display of the data in Fahrenheit or Celsius.
// - Change the look of the page based on the data (maybe use Giphy API).
// - Set up a form that will let users input their location and will fetch the weather info.
// - Display the information on the webpage.
// - Add styling.
// - Optional: add a ‘loading’ component.
