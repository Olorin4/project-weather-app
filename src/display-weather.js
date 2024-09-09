//  displayWeather.js creates new DOM elements and
//  renders weather data in the main content section.

import { fetchWeather } from "./get-data";
import { processWeatherData } from "./process-data";

function renderTitle(location) {
    const title = document.querySelector("h2");
    title.textContent = location;
}

function createHeader(text, container) {
    const weatherDisplay = document.querySelector(".weather-display");
    const header = document.createElement("h3");
    header.textContent = `${text} Weather`;
    weatherDisplay.insertBefore(header, container);
}

function createWeatherCard(day, container) {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");
    weatherCard.dataset.day = `${day}`;
    container.appendChild(weatherCard);
}

function renderCurrentWeather() {
    const currentWeather = document.querySelector(".current-weather-container");
    createHeader("Today's", currentWeather);
    createWeatherCard(1, currentWeather);
}

function renderWeaklyWeather() {
    const weaklyWeather = document.querySelector(".weakly-weather-container");
    createHeader("Weakly", weaklyWeather);
    for (let day = 2; day <= 7; day++) {
        createWeatherCard(day, weaklyWeather);
    }
}

async function displayWeather(userLocation) {
    const rawWeatherData = await fetchWeather(userLocation);
    const processedWeatherData = processWeatherData(rawWeatherData);
    renderTitle(processedWeatherData.currentWeather.location);
    renderCurrentWeather();
    renderWeaklyWeather();
}

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
