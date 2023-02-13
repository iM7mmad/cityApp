// gets data from backend and update the UI
async function getDatafromBackend(api_icon) {
    let entryHolder = document.getElementById('entryHolder');

    const backEndRequest = await fetch('http://localhost:5000/all')
    const backEndData = await backEndRequest.json()

    entryHolder.innerHTML = `
            <div id="date">Today is: <strong><u>${backEndData.date}</u></strong></div>
            <div id="country">Country is: <strong><u>${backEndData.country}</u></strong></div>
            <div id="coordinates"> The coordinates are: Latitude: <strong><u>${backEndData.lat}</u></strong>, Longtitude: <strong><u>${backEndData.lon}</u></strong></div>
            <img src="https://www.weatherbit.io/static/img/icons/${api_icon}.png">
            <div id="timezone"> Timezone: <strong><u>${backEndData.timezone}</u></strong></div>
            <div id="population"> The population is: <strong><u>${backEndData.population}</u></strong></div>
            <div id="picture"><img src="${backEndData.picture}"></div>
    
    `
}

export { getDatafromBackend }


