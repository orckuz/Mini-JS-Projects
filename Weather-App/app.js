/*PSEUDO CODE */
// new variable called userInput = input.value
// set 'q' in api link = to ${userInput}
// update html textContents to be api info by userInput
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const api = {
  key: "f74d30d16189ca03a71484dfd3a6409f",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

const userInput = document.querySelector("#user-input");

// Function: get weather
function getWeather(query) {
  fetch(`${api.baseUrl}weather?q=${query}&appid=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then((data) => {
      displayResults(data);
      console.log(data);
    })
    .catch((err) => {
      console.log("OH NO", err);
    });
}

// Function: Display weather
function displayResults(weather) {
  const currentLocation = document.querySelector("#current-location");
  currentLocation.innerHTML = `${weather.name} , ${weather.sys.country}`;
  const temp = document.querySelector("#temperature");
  temp.innerHTML = `${Math.round(weather.main.temp - 273.15)}<span>°c</span>`;
  const forecast = document.querySelector("#forecast");
  forecast.innerHTML = weather.weather[0].main;
  const realFeel = document.querySelector("#real-feel");
  realFeel.innerHTML = `${Math.round(
    weather.main.temp_min - 273.15
  )}°c / ${Math.round(weather.main.temp_max - 273.15)}°c`;
  let currDate = new Date();
  const currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = getDate(currDate);
}

// Function: Get current date
function getDate(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${month}, ${day} ${date}, ${year}`;
}

// Event for search when 'enter' is pressed
userInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getWeather(userInput.value);
  }
});
