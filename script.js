let appId = '0ae076e1926233aa375efe298d6ad698';
let units ='imperial';
let searchMethod ='zip';

function searchWeather(searchTerm) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}
function init(resultFromServer) {
    console.log(resultFromServer);
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').Value;
    if(searchTerm)
    searchWeather(searchTerm);
})
