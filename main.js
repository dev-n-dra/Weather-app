const input = document.querySelector('input')
const addButton = document.querySelector('button')
const deleteButton = document.querySelector('.delete')
const cards = document.querySelector('.cards')

addButton.addEventListener('click', function() {
    city = input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.hot_key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            cards.innerHTML = `<div class="card">
                <div class="card-content">
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
                    <div class="info">
                        <h1>${city}</h1>
                        <h2>${data.weather[0].description}</h2>
                        <h3>Humidity : ${data.main.humidity}%</h3>
                        <h3>Real feel : ${data.main.feels_like}°c</h3>
                    </div>
                    <p class="large">${data.main.temp}°c</p>
                </div>
            </div>`

        });
    input.value = ""
})