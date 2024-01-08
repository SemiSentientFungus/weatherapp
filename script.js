async function getWeatherJSON(town) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=438ac7e2b9a145d0bba123948231412&q=${town}`);
    const apiJSON = await response.json();
    console.log(apiJSON);
    logValues(apiJSON);
    //function call to make webpage wit
}

function logValues(api) {
    console.log(`${api.location.name}, ${api.location.region}`);
    console.log(api.current.temp_c);
}

getWeatherJSON("capetown");
