const API_KEY = '3ddea520b50e1e9f35af8b57e4807dbe';
const lat = -32.0771493;
const lon = -64.5809998;
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

    // document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = 'Temperatura actual: '+ Math.round(data.main.temp) + ' °C';
    // document.querySelector('.description').innerHTML = data.weather[0].description;
    document.querySelector('.humidity').innerHTML = 'Humedad: ' + Math.round(data.main.humidity) + ' %';
    // document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';
    // document.querySelector('.visibility').innerHTML = data.visibility + ' m';
}

getWeather();


// https://api.openweathermap.org/data/2.5/weather?lat=-32.0771493&lon=-64.5809998&appid=3ddea520b50e1e9f35af8b57e4807dbe&units=metric&lang=sp