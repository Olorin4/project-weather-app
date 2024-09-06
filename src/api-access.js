// Fetches weather data from Visual Crossing API.

export async function fetchWeather(location) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/next7days?unitGroup=metric&key=34VV9JAJ4E9GNYLGNTQP7KX8X&contentType=json`,
            {
                method: "GET",
                headers: {
                    // You can add headers here if needed
                },
            }
        );

        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response body as JSON
        const weatherData = await response.json();
        console.log({ response, weatherData });
        return weatherData;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// - Giphy API key: whAYeCrLmz9oafsWIiZKgRgYOEK6wFsw.
