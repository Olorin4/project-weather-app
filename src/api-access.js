export async function fetchData() {
    try {
      const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Thessaloniki/next7days?unitGroup=metric&key=34VV9JAJ4E9GNYLGNTQP7KX8X&contentType=json", {
        method: "GET",
        headers: {
          // You can add headers here if needed
        }
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
}


// - Giphy API key: whAYeCrLmz9oafsWIiZKgRgYOEK6wFsw.