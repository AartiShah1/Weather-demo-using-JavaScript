document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '59556bd3021d3fc6d855bbf2ec987c77';
    const searchButton = document.getElementById('search');
    const cityInput = document.getElementById('city');
    const location = document.getElementById('location');
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    searchButton.addEventListener('click', function () {
        const city = cityInput.value;

        // Use the OpenWeatherMap API to get weather data
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                location.textContent = data.name + ', ' + data.sys.country;
                temperature.textContent = Math.round(data.main.temp - 273.15) + '°C';
                description.textContent = data.weather[0].description;
                weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">`;
            })
            .catch((error) => {
                console.error('Error:', error);
                location.textContent = 'City not found';
            });
    });
});
