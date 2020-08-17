var city = document.getElementById("city");
var cityName = city.innerHTML;
const dayType = document.getElementById("day-type");
const tempCel = document.getElementById("temp-cel");
const humidity = document.getElementById("h-value");
const airPressure = document.getElementById("a-value");
const rainVol = document.getElementById("r-value");
const windSpeed = document.getElementById("w-value");
function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cba7b81d7a7170c67bf33f57f1cdaa2a`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dayType.innerHTML = data.weather[0].description;
      let temp = parseFloat(data.main.temp);
      let cel = temp - 273.15;
      tempCel.innerHTML = cel.toFixed(2);
      humidity.innerHTML = data.main.humidity;
      airPressure.innerHTML = data.main.pressure;
      if (data.rain) {
        rainVol.innerHTML = data.rain["1h"];
      } else {
        rainVol.innerHTML = "~";
      }
      windSpeed.innerHTML = data.wind.speed;
    });
}
getWeather(cityName);

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
  const inputCity = document.getElementById("input-city");
  city.innerHTML = inputCity.value;
  getWeather(inputCity.value);
  inputCity.value = "";
});
