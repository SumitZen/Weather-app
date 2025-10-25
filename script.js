// getting user data
let city = document.querySelector(".city");
let button = document.querySelector(".btt");
const apiKey = "e008cabef6944f3957d641df9e9834b1";
let weatherInfo = document.querySelector(".weather-info");
let cityNameDiv = document.querySelector(".cityName");
let tempDiv = document.querySelector(".temp");

button.addEventListener("click", () => {
   let cityName = city.value

  if (cityName === "") {
    alert("Please enter a city name");
    return
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      if(data.cod==="404"){
        alert("City not found. Please enter a valid city name.");
        return;
      }
      weatherInfo.style.display="flex";
      cityNameDiv.textContent = data.name;
      tempDiv.textContent=`${data.main.temp}°C`;

    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
