//  displayWeather.js creates new DOM elements and
//  renders weather data in the main content section.

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

function createHeaders() {
    const weatherDisplay = document.querySelector(".weather-display");
    const currentWeather = document.querySelector(".current-weather-container");
    const weaklyWeather = document.querySelector(".weakly-weather-container");
    const header1 = document.createElement("h3");
    const header2 = document.createElement("h3");
    header1.textContent = "Today's Weather";
    header2.textContent = "Weakly Weather";
    weatherDisplay.insertBefore(header1, currentWeather);
    weatherDisplay.insertBefore(header2, weaklyWeather);
}

function createWeatherCard() {
    
}

function renderCurrentWeather() {
    createHeaders();
    createWeatherCard();
}

async function displayWeather(userLocation) {
    const rawWeatherData = await fetchWeather(userLocation);
    const processedWeatherData = processWeatherData(rawWeatherData);
    renderTitle(processedWeatherData.currentWeather.location);
    renderCurrentWeather();
}
