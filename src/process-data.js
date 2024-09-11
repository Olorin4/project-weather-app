// processWeather.js destructures raw weather data to an object with only the relevant weather data.
import { format, getDate } from "date-fns";

export function processWeatherData(rawData) {
    const { resolvedAddress, timezone, currentConditions, days } = rawData;

    function parseDate(dateString) {
        const date = new Date(dateString);
        return {
            dayNumber: getDate(date), // Day of the month
            monthName: format(date, "MMMM"), // Full month name
            dayName: format(date, "EEEE"), // Full day of the week name
        };
    }

    const currentWeather = {
        date: days[0].datetime,
        location: resolvedAddress,
        timezone: timezone,
        temperature: Math.round(currentConditions.temp),
        maxTemp: Math.round(days[0].tempmax),
        minTemp: Math.round(days[0].tempmin),
        humidity: Math.round(currentConditions.humidity),
        description: currentConditions.conditions,
        windSpeed: Math.round(currentConditions.windspeed),
        icon: currentConditions.icon,
        ...parseDate(days[0].datetime),
    };

    const weaklyForecast = days.map((day) => {
        return {
            date: day.datetime,
            maxTemp: Math.round(day.tempmax),
            minTemp: Math.round(day.tempmin),
            description: day.conditions,
            icon: day.icon,
            ...parseDate(day.datetime),
        };
    });

    const processedWeatherData = {
        currentWeather,
        weaklyForecast,
    };
    console.log(`Processed Weather Data:`, processedWeatherData);
    return processedWeatherData;
}

// Utility function to convert temperature
export function convertTemperature(temp, convertTo) {
    if (convertTo === "C") {
        // Convert from Fahrenheit to Celsius
        return Math.round(((temp - 32) * 5) / 9);
    } else if (convertTo === "F") {
        // Convert from Celsius to Fahrenheit
        return Math.round((temp * 9) / 5 + 32);
    }
    return temp;
}
