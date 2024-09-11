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
// - Change page background based on the data (use Giphy API).
// - Add styling.
// - Optional: add a ‘loading’ component.
// - Add wind and rain level.
