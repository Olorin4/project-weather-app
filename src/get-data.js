// api-access.js fetches weather data from Visual Crossing API.

export async function fetchWeather(location) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/next7days?unitGroup=metric&key=34VV9JAJ4E9GNYLGNTQP7KX8X&contentType=json`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const rawWeatherData = await response.json();
        console.log(`Raw Weather Data:`, { response, rawWeatherData });
        return rawWeatherData;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// - Giphy API key: whAYeCrLmz9oafsWIiZKgRgYOEK6wFsw.
