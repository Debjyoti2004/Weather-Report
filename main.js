const apikey="e593ebbfb5672309205d72b113c19530";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox= document.querySelector(".search input");
const searchbutton= document.querySelector(".search button");
const weather_report= document.querySelector(".weathericon");


async function checkwether(city) {
    const responce = await fetch(apiurl+city+ `&appid=${apikey}`);
    if(responce.status==404){
        alert("Please Enter Valid City Name")
    }
    var data = await responce.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";


    if (data.weather[0].main=="Clear"){
        weather_report.src = "images/clear.png"
    }
    else if(data.weather[0].main=="Clouds"){
        weather_report.src = "images/clouds.png"
    }
    else if (data.weather[0].main=="Rain"){
    weather_report.src = "images/rain.png"
    }
    else if (data.weather[0].main=="Dizzle"){
        weather_report.src = "images/dizzle.png"
    }
    else if (data.weather[0].main=="Mist"){
        weather_report.src = "images/mist.png"
    }
    document.querySelector(".weather").style.display="block"
}
searchbutton.addEventListener("click",()=>{
    checkwether(searchbox.value);
})
checkwether();
