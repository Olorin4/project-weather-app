// index.js is the final entry point.

import "./normalize.css";
import "./styles.css";
import { displayWeather } from "./display-weather";

document.addEventListener("DOMContentLoaded", () => {
    (function getLocation() {
        const searchInput = document.querySelector(".search-bar");
        searchInput.addEventListener("change", () => {
            const userLocation = searchInput.value.trim();
            searchInput.value = "";
            if (!userLocation) return;
            console.log(`User location: ${userLocation}`);
            displayWeather(userLocation);
        });
    })();
});

// TO DO:
// - Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
// - Toggle display of the data in Fahrenheit or Celsius.
// - Change the look of the page based on the data (maybe use Giphy API).
// - Set up a form that will let users input their location and will fetch the weather info.
// - Display the information on the webpage.
// - Add styling.
// - Optional: add a ‘loading’ component.
