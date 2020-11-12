const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

var city = "Helsingborg";

var apiKey = "7a7762207b104a8e875133717201211";


var jsonUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};


getJSON(jsonUrl,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {

   
    const weatherLocation = document.createElement('h1');

    weatherLocation.innerText = data.location.name;

    const weatherHeader = document.createElement('h2');

    weatherHeader.innerText = data.current.condition.text;


    const weatherIcon = document.createElement('img');

    weatherIcon.setAttribute('src',data.current.condition.icon);

    const temperature = document.createElement('p');

    temperature.innerText = data.current.temp_c + " °C";

    app.appendChild(container);

    container.appendChild(weatherLocation);
    container.appendChild(weatherHeader);
    container.appendChild(weatherIcon);
    container.appendChild(temperature);

  }
});