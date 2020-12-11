function formatDate(timedate){
    let date= new Date(timedate);
    let hours= date.getHour();
    let minutes= date.getMinutes();
    let day= date.getDay();
    return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let dateElement=document.querySelector("#date");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].main;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
    dateElement.innerHTML= formatDate(response.data.dt*1000);
}
let apikey="f4a18a1f990c901b70bdae86bb1efc99";
let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apikey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);