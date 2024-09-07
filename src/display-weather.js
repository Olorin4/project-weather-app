// displayWeather.js renders weather data to the DOM.

import { fetchWeather } from "./get-data";
import { processWeatherData } from "./process-data";

function getLocation() {
    return new Promise((resolve) => {
        const searchInput = document.querySelector(".search-bar");
        searchInput.addEventListener("change", () => {
            const location = searchInput.value.trim();
            searchInput.value = "";
            if (!location) return;
            console.log(`User location: ${location}`);
            resolve(location);
        });
    });
}

function renderLocation(location) {
    const locationTitle = document.querySelector("h2");
    locationTitle.textContent = location;
}

export async function displayWeather() {
    try {
        const location = await getLocation();
        const rawWeatherData = await fetchWeather(location);
        processWeatherData(rawWeatherData);
        renderLocation(location);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
