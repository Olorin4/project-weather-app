export async function fetchData() {
    try {
        const responses = await fetch(
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Thessaloniki/next7days?unitGroup=metric&key=34VV9JAJ4E9GNYLGNTQP7KX8X&contentType=json",
            {
                method: "GET",
                headers: {
                    // You can add headers here if needed
                },
            }
        );

        // Check if the response is OK (status in the range 200-299)
        if (!responses.ok) {
            throw new Error(`HTTP error! Status: ${responses.status}`);
        }

        // Parse the response body as JSON
        const data = await responses.json();
        console.log(responses);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

// - Giphy API key: whAYeCrLmz9oafsWIiZKgRgYOEK6wFsw.
