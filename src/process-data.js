// processWeather.js destructures raw weather data to an object with only the relevant weather data.
import { format, parseISO, getDay, getDate, getMonth } from 'date-fns';

export function processWeatherData(rawData) {
    const { resolvedAddress, timezone, currentConditions, days } = rawData;

    const currentWeather = {
        date: days[0].datetime,
        location: resolvedAddress,
        timezone: timezone,
        temperature: currentConditions.temp,
        feelsLike: currentConditions.feelslike,
        humidity: currentConditions.humidity,
        description: currentConditions.conditions,
        windSpeed: currentConditions.windspeed,
        icon: currentConditions.icon,
    };

    const weaklyForecast = days.map((day) => {
        return {
            date: day.datetime,
            maxTemp: day.tempmax,
            minTemp: day.tempmin,
            description: day.conditions,
            icon: day.icon,
        };
    });

    const processedWeatherData = {
        currentWeather,
        weaklyForecast,
    };
    console.log(`Processed Weather Data:`, processedWeatherData);
    return processedWeatherData;
}
