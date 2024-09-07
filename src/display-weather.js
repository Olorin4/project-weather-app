// displayWeather.js renders weather data to the DOM.

import { fetchWeather } from "./get-data";
import { processWeatherData } from "./process-data";

export function getLocation() {
    const searchInput = document.querySelector(".search-bar");
    searchInput.addEventListener("change", () => {
        const userLocation = searchInput.value.trim();
        searchInput.value = "";
        if (!userLocation) return;
        console.log(`User location: ${userLocation}`);
        displayWeather(userLocation);
    });
}

function renderTitle(location) {
    const title = document.querySelector("h2");
    title.textContent = location;
}

export async function displayWeather(userLocation) {
    const rawWeatherData = await fetchWeather(userLocation);
    const processedWeatherData = processWeatherData(rawWeatherData);
    renderTitle(processedWeatherData.currentWeather.location);
}
