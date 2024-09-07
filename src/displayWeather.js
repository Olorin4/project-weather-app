// displayWeather.js renders weather data to the DOM.

import { fetchWeather } from "./get-data";
import { processWeatherData } from "./processWeather";

export async function getLocation() {
    const searchInput = document.querySelector(".search-bar");
    searchInput.addEventListener("change", async () => {
        const location = searchInput.value.trim();
        searchInput.value = "";
        console.log(location);
        try {
            const rawWeatherData = await fetchWeather(location);
            displayWeather(rawWeatherData);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    });
}

// export function renderLocation(location) {
//     const locationTitle = document.querySelector("h2");
//     locationTitle.textContent = location;
// }

function displayWeather(rawWeatherData) {
    if (!rawWeatherData) {
        console.error("No weather data provided.");
        return;
    }
    const processedWeatherData = processWeatherData(rawWeatherData);
    console.log(processedWeatherData);
}
