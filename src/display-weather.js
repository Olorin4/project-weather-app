//  displayWeather.js creates new DOM elements and
//  renders weather data in the main content section.
import { fetchWeather } from "./get-data";
import { processWeatherData } from "./process-data";
import { initDropdownMenu } from "./components/drop-down-menu";

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

function createDropdownMenu() {
    const weatherDisplay = document.querySelector(".weather-display");
    initDropdownMenu(weatherDisplay);
}

function createWeatherCard(day, container, data) {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");
    weatherCard.dataset.day = `${day}`;
    container.appendChild(weatherCard);
    createDateHeader(day, weatherCard, data);
    displayWeatherIcon(weatherCard, data);
    displayWeatherData(day, weatherCard, data);
}

function createDateHeader(day, container, data) {
    const dateHeader = document.createElement("div");
    dateHeader.classList.add("date-header");
    container.appendChild(dateHeader);
    const dayNumber = document.createElement("div");
    dayNumber.classList.add("daynumber");
    dayNumber.textContent = data.dayNumber;
    dateHeader.appendChild(dayNumber);
    const dayAndMonth = document.createElement("div");
    dayAndMonth.classList.add("day-and-month");
    dateHeader.appendChild(dayAndMonth);
    const month = document.createElement("div");
    month.classList.add("month");
    month.textContent = data.monthName;
    dayAndMonth.appendChild(month);
    const dayName = document.createElement("div");
    dayName.classList.add("dayname");
    dayName.textContent = data.dayName;
    dayAndMonth.appendChild(dayName);
}

function displayWeatherIcon(container, data) {
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/${data.icon}.svg`;
    weatherIcon.alt = data.description;
    weatherIcon.classList.add("weather-icon");
    container.appendChild(weatherIcon);
}

function displayWeatherData(day, container, data) {
    const weatherData = document.createElement("div");
    weatherData.classList.add("weather-data");
    container.appendChild(weatherData);
    if (data.temperature) {
        const currentTemp = document.createElement("div");
        currentTemp.classList.add("current-temp");
        currentTemp.textContent = `${data.temperature}°C`;
        weatherData.appendChild(currentTemp);
    }
    const maxtemp = document.createElement("div");
    maxtemp.classList.add("maxtemp");
    maxtemp.textContent = `Max: ${data.maxTemp}°C`;
    weatherData.appendChild(maxtemp);
    const mintemp = document.createElement("div");
    mintemp.classList.add("mintemp");
    mintemp.textContent = `Min: ${data.minTemp}°C`;
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
    for (let day = 1; day <= 6; day++) {
        createWeatherCard(day, weaklyWeatherContainer, data[day]);
    }
}

function clearWeatherDisplay() {
    const currentWeatherContainer = document.querySelector(".current-weather-container");
    const weaklyWeatherContainer = document.querySelector(".weakly-weather-container");
    currentWeatherContainer.innerHTML = "";
    weaklyWeatherContainer.innerHTML = "";
}

export async function displayWeather(userLocation) {
    clearWeatherDisplay();
    const rawWeatherData = await fetchWeather(userLocation);
    const processedWeatherData = processWeatherData(rawWeatherData);
    renderTitle(processedWeatherData.currentWeather.location);
    renderCurrentWeather(processedWeatherData.currentWeather);
    renderWeaklyWeather(processedWeatherData.weaklyForecast);
}
