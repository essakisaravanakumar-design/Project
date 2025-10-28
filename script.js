// Replace with your OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";

// Select DOM elements
const weatherForm = document.querySelector("#weatherForm");
const cityInput = document.querySelector("#city");
const weatherDisplay = document.querySelector("#weatherDisplay");

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name!");

  const url = https;//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found!");

    const data = await response.json();

    // Display weather details
    weatherDisplay.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><b>Temperature:</b> ${data.main.temp} °C</p>
      <p><b>Weather:</b> ${data.weather[0].description}</p>
      <p><b>Humidity:</b> ${data.main.humidity}%</p>
      <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherDisplay.innerHTML = <p style="color:red;">${error.message}</p>;
  }
});
