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
    createDateHeader(day, weatherCard);
}

function createDateHeader(day, container) {
    const dateHeader = document.createElement("div");
    dateHeader.classList.add("date-header");
    container.appendChild(dateHeader);
    const dayNumber = document.createElement("div");
    dayNumber.classList.add("daynumber");
    dateHeader.appendChild(dayNumber);
    const dayAndMonth = document.createElement("div");
    dayAndMonth.classList.add("day-and-month");
    dateHeader.appendChild(dayAndMonth);
    const month = document.createElement("div");
    month.classList.add("month");
    dayAndMonth.appendChild(month);
    const dayname = document.createElement("div");
    dayname.classList.add("dayname");
    dayAndMonth.appendChild(dayname);
    const maxtemp = document.createElement("div");
    maxtemp.classList.add("maxtemp");
    container.appendChild(maxtemp);
    const mintemp = document.createElement("div");
    mintemp.classList.add("mintemp");
    container.appendChild(mintemp);
    const weatherIcon = document.createElement("img");
    weatherIcon.src = "";
    weatherIcon.alt = "weather icon";
    container.appendChild(weatherIcon);
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

export async function displayWeather(userLocation) {
    const rawWeatherData = await fetchWeather(userLocation);
    const processedWeatherData = processWeatherData(rawWeatherData);
    renderTitle(processedWeatherData.currentWeather.location);
    renderCurrentWeather();
    renderWeaklyWeather();
}
