const apiKey = "4c755ccee32b2cf2692c1ed1dc409363";
const apiCountryUrl = "https://flagcdn.com/16x12/"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")
const weatherContainer = document.querySelector("#weather-data")

//Functions
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en_us`;

    try{
        const res = await fetch(apiWeatherURL);
        if(!res.ok){
            throw new Error(`Response status: ${Response.status}`);
        }

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error){
        console.error(error.message)
    }
    
};

const showWeatherData = async (city) => {

    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp) + `°C`
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

    const countryFlag = data.sys.country.toLowerCase();

    countryElement.setAttribute("src", `https://flagcdn.com/16x12/${countryFlag}.png`) ;

    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");

};

//Events
searchBtn.addEventListener("click", (e) => { 
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
})

cityInput.addEventListener("keyup", (e) =>{

    if(e.code === "Enter"){
        const city = e.target.value;
        showWeatherData(city);
    }

})
