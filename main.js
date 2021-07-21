const input = document.querySelector('input')
const addButton = document.querySelector('button')
const deleteButton = document.querySelector('.delete')
const cards = document.querySelector('.cards')

addButton.addEventListener('click', function() {
    city = input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d8274416435fe686232450f51cb3215a`)
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



//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d8274416435fe686232450f51cb3215a`)
//         .then(response => response.json())
//         .then(data => {
//             info.innerHTML = `<h1>${city}<h1>
//             <h2>temprature:${data.main.temp}°C</h2>
//             <h2>feels like:${data.main.feels_like}°C</h2>
//             <h2>${data.weather[0].description}</h2>
//             <h3>Humidity:${data.main.humidity}%</h3>
//             <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>`
//         })