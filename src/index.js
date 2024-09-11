// index.js is the final entry point.

import "./normalize.css";
import "./styles.css";
import { toggleLoading, displayWeather } from "./display-weather";

function getLocation() {
    const searchInput = document.querySelector(".search-bar");
    searchInput.addEventListener("change", () => {
        const userLocation = searchInput.value.trim();
        searchInput.value = "";
        if (!userLocation) return;
        console.log(`User location: ${userLocation}`);
        toggleLoading();
        displayWeather(userLocation).finally(() => toggleLoading());
    });
}

document.addEventListener("DOMContentLoaded", () => {
    getLocation();
});

// TO DO:
// - Change page background based on the data (use Giphy API).
// - Refine styling.
// - Add wind and rain level.
