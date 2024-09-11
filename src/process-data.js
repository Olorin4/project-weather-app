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
        temperature: currentConditions.temp,
        maxTemp: days[0].tempmax,
        minTemp: days[0].tempmin,
        humidity: currentConditions.humidity,
        description: currentConditions.conditions,
        windSpeed: currentConditions.windspeed,
        icon: currentConditions.icon,
        ...parseDate(days[0].datetime),
    };

    const weaklyForecast = days.map((day) => {
        return {
            date: day.datetime,
            maxTemp: day.tempmax,
            minTemp: day.tempmin,
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
