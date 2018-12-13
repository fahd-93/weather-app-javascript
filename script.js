let appId = '0ae076e1926233aa375efe298d6ad698';
let units = 'imperial';
let searchMethod;
function getSearchMethod(searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip';
    else
        searchMethod = 'q';
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}
function init(resultFromServer) {
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("b-blue-ocean-5412 (2).jpg")';
            break;

        case 'Clouds':
            document.body.style.backgroundImage = 'url("clouds-cloudy-gloomy-158163.jpg")';
            break;

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("car-drops-of-water-glass-1553.jpg")';
            break;

        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("clouds-dark-lightning-1118869.jpg")';
            break;

        case 'Snow':
            document.body.style.backgroundImage = 'url("abstract-art-background-289649.jpg")';
            break;

        default:
            break;


    }
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    console.log(searchTerm);
    if (searchTerm)
        searchWeather(searchTerm);
})
