const weather = {
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
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "℃";
        document.querySelector(".description").innerText = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".cloudy").innerText = all + "%";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + "m/s";
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