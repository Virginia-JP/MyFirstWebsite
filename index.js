// Clock Function

function updateClock(){
  const now = new Date();

  let hours = now.getHours();
  const meridiem = hours >=12? "PM":"AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2,0);

  const minutes = now.getMinutes().toString().padStart(2,0);

  const seconds = now.getSeconds().toString().padStart(2,0);

  const month = now.getMonth()+1; 
  const date = now.getDate();
  const year = now.getFullYear();

  const timeString1 = `${hours}:${minutes}:${seconds} ${meridiem} `;
  const timeString2 = `${month}/${date}/${year}`;

  document.getElementById("clock").textContent = timeString1;
  document.getElementById("date").textContent = timeString2;

}

updateClock();
setInterval(updateClock,1000);

// Weather Function
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "";

weatherForm.addEventListener("submit", async event => {

})

async function getWeatherData(city) {

}

function displayWeatherInfo(data){

}

function getWeatherherEmoji(weatherId){

}

function displayError(message){
  
}