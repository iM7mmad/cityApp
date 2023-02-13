import { getDatafromBackend } from "./backenddata.js";


// Personal API Key for OpenWeatherMap API
const myWeatherbitKey = 'af37cdc0f6bd4c77a2cdddf01a1ad539';

const pixabayAPI = '33608293-07d7a9e438e90c83066b9dd2b';

const geonamesUsername = 'im7mmad'

// https://pixabay.com/api/?key=${pixabayAPI}&q=New+York&image_type=photo&pretty=true

// http://api.geonames.org/searchJSON?q=Riyadh&maxRows=10&username=geonamesUsername


// Create a new date instance dynamically with JS
let todaysDate = new Date();
let dateFormat = (todaysDate.getMonth() + 1) + '-' + todaysDate.getDate() + '-' + todaysDate.getFullYear();



async function handleSubmitButtonClickEvent(e) {
    e.preventDefault();
    // just to log and see if the function is working
    console.log("Started Handling Button Click");
    let  cityname = document.getElementById('cityname').value;
    let userFeelings = document.getElementById('feelings');

    try {
        // to try the code first and if there is no Error it should execute
        // added Units = Imperial to change the default units of measure to Imperial (Default unit is 'standard' based on the documentation)
        const geoURL = `http://api.geonames.org/searchJSON?q=${cityname}&maxRows=10&username=${geonamesUsername}`
        const pixabyURL = `https://pixabay.com/api/?key=${pixabayAPI}&q=${cityname}&image_type=photo&pretty=true`
        const weatherbitURLAPI = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=${myWeatherbitKey}&include=minutely&city=${cityname}`;
        const weatherAPIResponse = await fetch(weatherbitURLAPI).then(res => res.json())
        const geonamesAPIResponse = await fetch(geoURL).then(res => res.json())
        const pixabayAPIResponse = await fetch(pixabyURL).then(res => res.json())

        //to get the temperature
        const api_city = weatherAPIResponse.data[0].city_name;
        console.log(api_city);
        //to get the sky condition
        const api_population = geonamesAPIResponse.geonames[0].population;
        const api_picture = pixabayAPIResponse.hits[0].largeImageURL
        const api_countryCode = weatherAPIResponse.data[0].country_code;
        const api_lon = Math.round(weatherAPIResponse.data[0].lon);
        const api_lat = Math.round(weatherAPIResponse.data[0].lat);
        const api_timezone = weatherAPIResponse.data[0].timezone;
        const api_icon = weatherAPIResponse.data[0].weather.icon;

        //function to post data

        await fetch('http://localhost:5000/weather', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                date: dateFormat,
                city: api_city,
                country: api_countryCode,
                lon: api_lon,
                lat: api_lat,
                timezone: api_timezone,
                population: api_population,
                picture: api_picture
            })
        })

        // //call get all data function
        getDatafromBackend(api_icon);

        // to catch any Error that might happen and display a message
    } catch (err) {
        console.log('Zipcode is wrong', err);
    }

}



// Event listener to add function to existing HTML DOM element with fetching the URL API using ASYNC/AWAIT

export { handleSubmitButtonClickEvent }