let weather = {
    apiKey: "ac611649e95c58f02e278724d4fff77a",
    fetchWeather: function(city){ // Fetch Api by city name
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));    
    },

    displayWeather: function(data) { 
        // Retrieve specific data from Api
        const { name } = data;
        const { icon } = data.weather[0];
        const { description } = data.weather[0];
        const { all } = data.clouds;
        const { temp } = data.main;
        const { humidity } = data.main;
        const { speed } = data.wind;

        // Display results of specific data in App
        // console.log(name, icon, description, all, temp, humidity, speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerText = temp + "℃";
        document.querySelector(".description").innerText = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".cloudy").innerText = all + "%";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + "m/s";
        document.querySelector("#display").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')";
    },

    search: function() {
        this.fetchWeather(document.querySelector("#search").value); // pass city name contained in input text field to the fetchWeather function
    },
    
};

// Listen to button click event and pass input content to search function
document.querySelector("button").addEventListener("click", function(){
        weather.search();
    }
);

// Get user's location immediately via prompt and display it

function answer() {
    // console.log(promptField);
    let promptField = prompt("Enter your location", '');

    if (promptField != null){
        alert("Click OK to view the weather in " + promptField);
        weather.fetchWeather(promptField);
        date();
    } else {
        let newPrompt = prompt("You have to provide an input", '');
        alert("Click OK to view the weather in " + newPrompt);
        weather.fetchWeather(newPrompt);
        date();
    }
};

answer();

// Search for weather update from locations provided

function place1() {
    let specificPlace1 = document.querySelector(".location1").innerText;
    // console.log(specificPlace1);
    weather.fetchWeather(specificPlace1);
};

function place2() {
    let specificPlace2 = document.querySelector(".location2").innerText;
    // console.log(specificPlace2);
    weather.fetchWeather(specificPlace2);
};

function place3(){
    let specificPlace3 = document.querySelector(".location3").innerText;
    // console.log(specificPlace3);
    weather.fetchWeather(specificPlace3);
};

function place4(){
    let specificPlace4 = document.querySelector(".location4").innerText;
    // console.log(specificPlace4);
    weather.fetchWeather(specificPlace4);
};


// Function to get the current date 

function date (){
    const current = new Date().toLocaleString("en-UK", {timeZone: 'GMT'});
    console.log(current);

    document.querySelector(".date").innerText = current;
    weather.fetchWeather(document.querySelector(".date").innerText);
};