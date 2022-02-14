
async function search() {
    let location = document.getElementById("search").value;
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7ddd9bfc08c5470e9bf203843222001&q=${location}&days=3`);
    data = await data.json();
    currentDisplay(data.location, data.current);
    day2Display(data.forecast);
    day3Display(data.forecast);
}

let locationSearch= document.getElementById("search").value;
async function search2(locationSearch) {
    if(locationSearch.length>2){
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7ddd9bfc08c5470e9bf203843222001&q=${locationSearch}&days=3`);
    data = await data.json();
    currentDisplay(data.location, data.current);
    day2Display(data.forecast);
    day3Display(data.forecast);}
    else{
        display();
    }
}

async function display() {
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7ddd9bfc08c5470e9bf203843222001&q=cairo&days=3`);
    data = await data.json();
    currentDisplay(data.location, data.current);
    day2Display(data.forecast);
    day3Display(data.forecast);
}
display();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function currentDisplay(location, current) {
    let date = new Date();
    let display = `<div class="card-header d-flex justify-content-between" style="background-color: #2D303D;">
    <span>${days[date.getDay()]}</span>
     <span>${date.getDate() + monthNames[date.getMonth()]}</span>
</div>
<div class="card-body">
  <h3 class="card-title">${location.name}</h3>
  <div class="d-flex justify-content-between card-text" >
  <p >${current.temp_c}<sup>o</sup>C</p>
  <img src="https:${current.condition.icon}"  alt="" width=100>
  </div>
</div>
<span class="text-primary">${current.condition.text}</span>
<div class="my-3">
    <span class="text-muted me-3">
        <img src="images/icon-umberella.png">
        ${current.wind_degree}%
    </span>
    <span class="text-muted me-3">
        <img src="images/icon-wind.png">
        ${current.wind_kph}km/h
    </span>
    <span class="text-muted">
        <img src="images/icon-compass.png">
       ${current.wind_dir}
    </span>
</div>`
    document.querySelector(".card1").innerHTML = display;
}


function day2Display(forecast) {
    let date = new Date();
    if(date.getDay()==6){
        var next=date.getDay();
        next=0;
    }
    else{
        var next=date.getDay()+1;
    }

    let display = `
    <div class="card-header " style="background-color: #222530;">${days[next]}</div>
    <div class="card-body text-white">
     <img src="https:${forecast.forecastday[1].day.condition.icon}" width=70>
     <h3>${forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h3>
     <span>${forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</span>
     <br><br>
     <span class="text-primary">${forecast.forecastday[1].day.condition.text}</span>
    </div>`
    document.querySelector(".card2").innerHTML = display;
}


function day3Display(forecast) {
    let date = new Date();
    if(date.getDay()==5){
        var next=date.getDay();
        next=0;
    }
    else  if(date.getDay()==6){
        var next=date.getDay();
        next=1;
    }
    else{
        var next=date.getDay()+2;
    }
    let display = `
    <div class="card-header " style="background-color: #222530;">${days[next]}</div>
    <div class="card-body text-white">
     <img src="https:${forecast.forecastday[2].day.condition.icon}" width=70>
     <h3>${forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h3>
     <span>${forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</span>
     <br><br>
     <span class="text-primary">${forecast.forecastday[2].day.condition.text}</span>
    </div>`
    document.querySelector(".card3").innerHTML = display;
}


