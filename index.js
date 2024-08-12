// Clock Function

function updateClock(){
  const now = new Date();

  let hours = now.getHours();
  const meridiem = hours >=12? "PM":"AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2,0);

  const minutes = now.getMinutes().toString().padStart(2,0);

  const seconds = now.getSeconds().toString().padStart(2,0);

  const month = (now.getMonth()+1).toString().padStart(2,0); 
  const date = now.getDate().toString().padStart(2,0);
  const year = now.getFullYear();

  //const timeString = `${date}-${month}-${year}-${hours}:${minutes}:${seconds} ${meridiem}`;
  const timeString1 = `${hours}:${minutes}:${seconds} ${meridiem} HKT`;

  const timeString2 = `${date}-${month}-${year}`;

  document.getElementById("time").textContent = timeString1;

  document.getElementById("date").textContent = timeString2;

}

updateClock();
setInterval(updateClock,1000);



/*Weather Function
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "08ef7cd746f3a642fd376d84ecf7ce48";

weatherForm.addEventListener("submit", async event => {
  event.preventDefault();
  const city = cityInput.value;
  if (city){

  }
  else {
    displayError("Please enter a city");
  }
})

async function getWeatherData(city) {

}

function displayWeatherInfo(data){

}

const {name}

function getWeatherherEmoji(weatherId){

}

function displayError(message){
  const errorDisplay =  document.createElement("p");
  errorDisplay.textContent =  message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  
}
  */


