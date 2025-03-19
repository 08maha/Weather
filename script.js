const apiKey = 'e4a1d12f67bffb5e2ceef32159cc9c6f';
    document.getElementById('getWeatherBtn').addEventListener('click', function () {
        const city = document.getElementById('cityInput').value.trim();
        const resultDiv = document.getElementById('weatherResult');
        resultDiv.innerHTML = '';

        if (!city) {
           alert("Please Enter City Name");
           return 0;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod && data.cod != 200) 
                    {
                    resultDiv.innerHTML = `<p class="error">Invaild City Name</p>`;
                    return;
                }

                resultDiv.innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p><b>Temperature:</b> ${data.main.temp} °C</p>
                    <p><b>Weather:</b> ${data.weather[0].description}</p>
                    <p><b>Humidity:</b> ${data.main.humidity}%</p>
                    <p><b>Wind:</b> ${data.wind.speed} m/s</p>
                `;
            })
    });
