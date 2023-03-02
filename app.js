const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    //searchs the api from the vaule in the city element
    const searchTerm = form.elements.query.value;
    if(document.getElementById('temp_type_F').checked){
        try {
            //searchTerm is the value where you search the json files for object info
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&&units=imperial&appid=e2efa9a3d7e02c383083ff28132f50d8`);
           // console.log(res); //displays data information on search term to the console
            makeWeatherIcon(res); // calls function that makes the icon for weather
            displayTemp(res); // calls function to display the current temp
            weatherDescription(res); // calls function to display weather description
/*/////////////////////Practice with AnimeJS///////////////////////////////////
            //animating the easing in of info
            let myAnimation = anime({
            //describe the animation details 
            targets: '#iconArea',
            translateX: 300,
            duration: 1500,
            easing: 'easeInElastic(1, .7)'
            });*/
        }catch{
            alert("Sorry Error at this time.");
        }
        form.elements.query.value = '';
    }else if(document.getElementById('temp_type_C').checked){
        try {
            //searchTerm is the value where you search the json files for object info
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&&units=metric&appid=e2efa9a3d7e02c383083ff28132f50d8`);
           // console.log(res); //displays data information on search term to the console
            makeWeatherIcon(res); // calls function that makes the icon for weather
            displayTemp(res); // calls function to display the current temp
            weatherDescription(res); // calls function to display weather description
/*/////////////////////Practice with AnimeJS///////////////////////////////////
            //animating the easing in of info
            let myAnimation = anime({
            //describe the animation details 
            targets: '#iconArea',
            translateX: 300,
            duration: 1500,
            easing: 'easeInElastic(1, .7)'
            });*/
        }catch{
            alert("Sorry Error at this time.");
        }
        form.elements.query.value = '';
    }else {
        alert("Please select a temperature type.");
    }
    
})

const makeWeatherIcon = (searchTerm) => {
    const imgArea = document.getElementById("iconArea");
    const newImg = document.createElement('IMG');
    const nameP = document.createElement('p');
    const countryP = document.createElement('p');
    const weatherIcon = `http://openweathermap.org/img/wn/${searchTerm.data.weather[0].icon}.png`;
    const name = searchTerm.data.name;
    const country = searchTerm.data.sys.country;
    newImg.src = weatherIcon;
    imgArea.append(newImg);
    nameP.append("City: " + name)
    countryP.append("Country: " + country);
    imgArea.append(nameP);
    nameP.append(countryP);
}

const displayTemp = (searchTerm) => {
    const temp = searchTerm.data.main.temp;
    const temperatureDis = document.createElement('p');
    const imgArea = document.getElementById("iconArea");
    temperatureDis.append(temp);
    imgArea.append("Temperature is: " + temp + "\u00B0");
}

const weatherDescription = (searchTerm) => {
    const imgArea = document.getElementById("iconArea");
    const desc = searchTerm.data.weather[0].description;
    const descArea = document.createElement('p');
    descArea.append("Weather looks like: "  + desc);
    imgArea.append(descArea);
}

