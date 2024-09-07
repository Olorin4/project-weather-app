// processWeather.js destructures raw weather data to an object with only the relevant weather data.

export function processWeatherData(rawData) {
    // Extract relevant data points
    const { resolvedAddress, timezone, currentConditions, days } = rawData;

    // Example of current weather information
    const currentWeather = {
        location: resolvedAddress,
        timezone: timezone,
        temperature: currentConditions.temp,
        feelsLike: currentConditions.feelslike,
        humidity: currentConditions.humidity,
        description: currentConditions.conditions,
        windSpeed: currentConditions.windspeed,
        icon: currentConditions.icon, // Weather icon type
    };

    // Example of daily forecast extraction (first day)
    const dailyForecast = days.map((day) => {
        return {
            date: day.datetime,
            maxTemp: day.tempmax,
            minTemp: day.tempmin,
            description: day.conditions,
            icon: day.icon,
        };
    });

    // Return an object containing current weather and forecast
    return {
        currentWeather,
        dailyForecast,
    };
}
