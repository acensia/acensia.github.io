const API_KEY = "9b2f0dbfa61660af3e5c9c30c434e88f";
const weatherDiv = document.getElementById("weatherDiv");

function onGeoSuccess(position){
    const lat= position.coords.latitude;
    const lon = position.coords.longitude;
    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(api_url);
    fetch(api_url).then(response => response.json()).then(data=>{
        const city = data.name;
        const weat = data.weather[0].main;
        const cityWrite = weatherDiv.querySelector("#city");
        const weatherWrite = weatherDiv.querySelector("#weather");
        cityWrite.innerText = city;
        weatherWrite.innerText = `${weat} /`;
    });
}

function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);