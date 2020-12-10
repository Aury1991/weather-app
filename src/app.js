function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].main;
}
let apikey="f4a18a1f990c901b70bdae86bb1efc99";
let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apikey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);