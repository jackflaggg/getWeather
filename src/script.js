import {city, search} from "./selectors/selector";
import {APIKEY} from "./selectors/api";

search.addEventListener('click', ()=> {
    if (city === ""){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
        .then(res => res.json())
        .then(json => {

            let image = document.querySelector('.weather-box img');
            let temperature = document.querySelector('.weather-box .temperature');
            let description = document.querySelector('.weather-box .description');
            let humidity = document.querySelector('.weather-details .description');
            let wind = document.querySelector('.weather-details .wind');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Drizzle':
                    image.src = 'images/drizzle.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Wind':
                    image.src = 'images/wind.png';
                    break;
                case 'Mist':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = '';
            }
        })
})