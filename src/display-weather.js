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
    header.textContent = `${text}`;
    weatherDisplay.insertBefore(header, container);
}

function createWeatherCard(day, container, data) {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");
    weatherCard.dataset.day = `${day}`;
    container.appendChild(weatherCard);
    createDateHeader(day, weatherCard, data);
    displayWeatherData(day, weatherCard, data);
}

function createDateHeader(day, container, data) {
    const dateHeader = document.createElement("div");
    dateHeader.classList.add("date-header");
    container.appendChild(dateHeader);
    const dayNumber = document.createElement("div");
    dayNumber.classList.add("daynumber");
    dayNumber.textContent = data.date.split("-")[2];
    dateHeader.appendChild(dayNumber);
    const dayAndMonth = document.createElement("div");
    dayAndMonth.classList.add("day-and-month");
    dateHeader.appendChild(dayAndMonth);
    const month = document.createElement("div");
    month.classList.add("month");
    month.textContent = data.date;
    dayAndMonth.appendChild(month);
    const dayName = document.createElement("div");
    dayName.classList.add("dayname");
    dayName.textContent = data.date;
    dayAndMonth.appendChild(dayName);
}

function displayWeatherData(day, container, data) {
    const weatherData = document.createElement("div");
    weatherData.classList.add("weather-data");
    container.appendChild(weatherData);
    const weatherIcon = document.createElement("img");
    weatherIcon.src = "";
    weatherIcon.alt = "weather icon";
    weatherData.appendChild(weatherIcon);
    if (data.temperature) {
        const currentTemp = document.createElement("div");
        currentTemp.classList.add("current-temp");
        currentTemp.textContent = data.temperature;
        weatherData.appendChild(currentTemp);
    }
    const maxtemp = document.createElement("div");
    maxtemp.classList.add("maxtemp");
    maxtemp.textContent = data.tempmax;
    weatherData.appendChild(maxtemp);
    const mintemp = document.createElement("div");
    mintemp.classList.add("mintemp");
    weatherData.appendChild(mintemp);
}

function renderCurrentWeather(data) {
    const currentWeatherContainer = document.querySelector(".current-weather-container");
    createHeader("Today's Weather", currentWeatherContainer);
    createWeatherCard(1, currentWeatherContainer, data);
}

function renderWeaklyWeather(data) {
    const weaklyWeatherContainer = document.querySelector(".weakly-weather-container");
    createHeader("Weakly Forecast", weaklyWeatherContainer);
    for (let day = 1; day <= 7; day++) {
        createWeatherCard(day, weaklyWeatherContainer, data[day]);
    }
}

export async function displayWeather(userLocation) {
    const rawWeatherData = await fetchWeather(userLocation);
    const processedWeatherData = processWeatherData(rawWeatherData);
    renderTitle(processedWeatherData.currentWeather.location);
    console.log(processedWeatherData.currentWeather.date);
    renderCurrentWeather(processedWeatherData.currentWeather);
    renderWeaklyWeather(processedWeatherData.weaklyForecast);
}
