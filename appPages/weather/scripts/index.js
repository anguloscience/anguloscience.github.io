"WEATHER_API_KEY"

const weatherDataElement = document.getElementById("weather-data");

const cityInputElement = document.getElementById("city-input");

const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
   event.preventDefault();
   const cityValue = cityInputElement.value;
   getWeatherData(cityValue);
   // console.log(cityValue);
});

async function getWeatherData(cityValue) {
   try {
      const response = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
         throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      const temperature = Math.round(data.main.temp);

      const description = data.weather[0].description;

      const icon = data.weather[0].icon;

      const details = [
         `Feels like: ${Math.round(data.main.feels_like)}°C`,
         `Humidity: ${Math.round(data.main.humidity)}%`,
         `Wind speed: ${Math.round(data.wind.speed)} m/s`,
      ];

      weatherDataElement.querySelector(".js-icon").innerHTML = `<img
      src="http://openweathermap.org/img/wn/${icon}.png"
      alt="Weather icon" />`;

      weatherDataElement.querySelector(
         ".js-temperature"
      ).textContent = `${temperature}°C`;

      weatherDataElement.querySelector(
         ".js-description"
      ).textContent = `${description}`;

      weatherDataElement.querySelector(".js-details").innerHTML = details
         .map((detail) => `<div>${detail}</div>`)
         .join("");

   } catch (error) {
    weatherDataElement.querySelector(".js-icon").innerHTML = ""
      weatherDataElement.querySelector(
         ".js-temperature"
      ).textContent = "";

      weatherDataElement.querySelector(
         ".js-description"
      ).textContent = "An error ocurred. Please check the name of the city and try again :)";

      weatherDataElement.querySelector(".js-details").innerHTML = ""

   }
}
