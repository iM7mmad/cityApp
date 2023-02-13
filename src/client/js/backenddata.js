// gets data from backend and update the UI
async function getDatafromBackend(api_icon) {
    let entryHolder = document.getElementById('entryHolder');

    const backEndRequest = await fetch('http://localhost:5000/all')
    const backEndData = await backEndRequest.json()

    entryHolder.innerHTML = `
            <div id="date">Today is: ${backEndData.date} </div>
            <div id="country">Country is: ${backEndData.country} </div>
            <div id="coordinates"> The coordinates are: Latitude: ${backEndData.lat}, Longtitude:${backEndData.lon} </div>
            <img src="https://www.weatherbit.io/static/img/icons/${api_icon}.png">
            <div id="timezone"> Timezone: ${backEndData.timezone} </div>
            <div id="population"> The population is: ${backEndData.population} </div>
            <div id="picture"><img src="${backEndData.picture}"></div>
    
    `
}

export { getDatafromBackend }


