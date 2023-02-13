// --- Require packages installed ---//

// Express to run server and routes
const express = require('express');
// Path
const path = require('path')
// Cors
const cors = require('cors');

// Body Parser
const bodyParser = require('body-parser');

// Setup empty JS object to act as endpoint for all routes
let projectData = {};


// Start up an instance of app
const app = express();


// Defining the port to use
const port = 5000;


app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
app.use(cors());


// Initialize the main project folder
app.use(express.static('dist'));


// Setting up the server with the Listening function and a message to show the port
app.listen(port, listening());

function listening() {
    console.log('Server is up and running!');
    console.log(`Server is running on http://localhost:${port}`);
}

// to GET ALL data

app.get('/all', (req, res) => {
    res.send(projectData);
})


// Post Route and filling up the ProjectData object with new data
app.post('/weather', (req, res) => {
    projectData = {
        date: req.body.date,
        city: req.body.city,
        country: req.body.country,
        lon: req.body.lon,
        lat: req.body.lat,
        timezone: req.body.timezone,
        population: req.body.population,
        picture: req.body.picture
    }
    res.send(projectData);

    //to console the new data in the terminal just make sure everything is working right
    console.log(projectData);
})


