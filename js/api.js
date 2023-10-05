const API_KEY = '3ddea520b50e1e9f35af8b57e4807dbe';
// const lat = -32.0771493; // Departamento de Calamuchita
const lat = -31.898333333333; // La Cumbrecita
// const lon = -64.5809998; // Departamento de Calamuchita
const lon =  -64.773333333333; // La Cumbrecita
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=sp`;

async function getWeather() {
    // const response = await fetch(url);
    const response = await fetch('../json/data.json');
    const data = await response.json();
    console.log(data);
    console.log(data.name);
    console.log('Temperatura actual: ' + Math.round(data.main.temp) + ' °C');
    console.log('Descripción: ' + data.weather[0].description);
    console.log(data.weather[0].icon);
    console.log('Humedad: ' + Math.round(data.main.humidity) + ' %');
    console.log('Velocidad del viento: ' + Math.round(data.wind.speed) + ' km/h');
    console.log('Visibilidad: ' + data.visibility + ' m');


    // document.querySelector('.weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    // document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C';
    // document.querySelector('.description').innerHTML = data.weather[0].description;
    // document.querySelector('.humidity').innerHTML = 'Humedad: ' + Math.round(data.main.humidity) + ' %';
    // document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';
    // document.querySelector('.visibility').innerHTML = data.visibility + ' m';
}

getWeather();

// Departamento de Calamuchita
// https://api.openweathermap.org/data/2.5/weather?lat=-32.0771493&lon=-64.5809998&appid=3ddea520b50e1e9f35af8b57e4807dbe&units=metric&lang=sp

// La Cumbrecita
// https://api.openweathermap.org/data/2.5/weather?lat=-31.898333333333&lon=-64.773333333333&appid=3ddea520b50e1e9f35af8b57e4807dbe&units=metric&lang=sp

// Codigos de iconos
// 01d: Cielo despejado (día)
// 01n: Cielo despejado (noche)
// 02d: Algunas nubes (día)
// 02n: Algunas nubes (noche)
// 03d: Nubosidad dispersa (día)
// 03n: Nubosidad dispersa (noche)
// 04d: Nublado (día)
// 04n: Nublado (noche)
// 09d: Lluvia ligera (día)
// 09n: Lluvia ligera (noche)
// 10d: Lluvia (día)
// 10n: Lluvia (noche)
// 11d: Tormenta (día)
// 11n: Tormenta (noche)
// 13d: Nieve (día)
// 13n: Nieve (noche)
// 50d: Niebla (día)
// 50n: Niebla (noche)

// 01d: Clear sky (day)
// 01n: Clear sky (night)
// 02d: Few clouds (day)
// 02n: Few clouds (night) 
// 03d: Scattered clouds (day)
// 03n: Scattered clouds (night)
// 04d: Broken clouds (day)
// 04n: Broken clouds (night)
// 09d: Shower rain (day)
// 09n: Shower rain (night)
// 10d: Rain (day)
// 10n: Rain (night)
// 11d: Thunderstorm (day) 
// 11n: Thunderstorm (night)
// 13d: Snow (day)
// 13n: Snow (night)
// 50d: Mist (day)
// 50n: Mist (night)