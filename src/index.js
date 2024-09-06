function displayWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let currentTemp = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(currentTemp);
}
function searchCity(city) {
  key = "f7b738a0b07436t36c3d2483d34ob9da";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  axios.get(apiUrl).then(displayWeather);
}
function handleClick(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleClick);
searchCity("Paris");
