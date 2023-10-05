const API_KEY = '3ddea520b50e1e9f35af8b57e4807dbe';
// const lat = -32.0771493; // Departamento de Calamuchita
const lat = -31.898333333333; // La Cumbrecita
// const lon = -64.5809998; // Departamento de Calamuchita
const lon =  -64.773333333333; // La Cumbrecita
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=sp`;

const icon = document.querySelector('#icon');

async function getWeather() {
    // const response = await fetch(url);
    const response = await fetch('../json/data.json');
    const data = await response.json();
    console.log(data);
    // console.log(data.name);
    console.log('Temperatura actual: ' + Math.round(data.main.temp) + ' °C');
    // console.log('Descripción: ' + data.weather[0].description);
    console.log(data.weather[0].icon);
    // console.log('Humedad: ' + Math.round(data.main.humidity) + ' %');
    // console.log('Velocidad del viento: ' + Math.round(data.wind.speed) + ' km/h');
    // console.log('Visibilidad: ' + data.visibility + ' m');


    // document.querySelector('.weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    // document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C';
    // document.querySelector('.description').innerHTML = data.weather[0].description;
    // document.querySelector('.humidity').innerHTML = 'Humedad: ' + Math.round(data.main.humidity) + ' %';
    // document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';
    // document.querySelector('.visibility').innerHTML = data.visibility + ' m';

    if(data.weather[0].icon === '01d') {
        icon.className = 'wi wi-owm-day-800';
    } else if(data.weather[0].icon === '01n') {
        icon.className = 'wi wi-owm-night-800';
    } else if(data.weather[0].icon === '02d') {
        icon.className = 'wi wi-owm-801';
    } else if(data.weather[0].icon === '02n') {
        icon.className = 'wi wi-owm-night-801';
    } else if(data.weather[0].icon === '03d') {
        icon.className = 'wi wi-owm-day-802';
    } else if(data.weather[0].icon === '03n') {
        icon.className = 'wi wi-owm-night-802';
    } else if(data.weather[0].icon === '04d') {
        icon.className = 'wi wi-owm-day-803';
    } else if(data.weather[0].icon === '04n') {
        icon.className = 'wi wi-owm-night-803';
    } else if(data.weather[0].icon === '09d' || data.weather[0].icon === '10d') {
        icon.className = 'wi wi-owm-day-501';
    } else if(data.weather[0].icon === '09n' || data.weather[0].icon === '10n') {
        icon.className = 'wi wi-owm-night-501';
    } else if(data.weather[0].icon === '11d') {
        icon.className = 'wi wi-owm-day-200';
    } else if(data.weather[0].icon === '11n') {
        icon.className = 'wi wi-owm-night-200';
    } else if(data.weather[0].icon === '13d') {
        icon.className = 'wi wi-owm-day-600';
    } else if(data.weather[0].icon === '13n') {
        icon.className = 'wi wi-owm-night-600';
    } else if(data.weather[0].icon === '50d') {
        icon.className = 'wi wi-owm-day-741';
    } else if(data.weather[0].icon === '50n') {
        icon.className = 'wi wi-owm-night-741';
    }
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

// Codigos de iconos
// 01d: Cielo despejado (día)
// 01n: 800
// 02d: 801 
// 02n: 801
// 03d: 802
// 03n: 802
// 04d: 803 
// 04n: 803
// 09d: 500
// 09n: 500
// 10d: 500
// 10n: 500
// 11d: 200 a 232
// 11n: 200 a 232
// 13d: 600 a 622
// 13n: 600 a 622 
// 50d: 741
// 50n: 741

// 800: despejado (01n)
// 801: parcialmente nublado (02d, 02n)
// 802: nubes dispersas (03d, 03n)
// 803: nublado (04d, 04n)
// 500: lluvia (09d, 09n, 10d, 10n)
// 200 a 232: tormentas (11d, 11n)
// 600 a 622: nieve (13d, 13n)
// 741: niebla (50d, 50n)
