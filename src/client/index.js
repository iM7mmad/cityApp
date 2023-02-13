// importing main functions
import { handleSubmitButtonClickEvent } from "./js/app.js";
import { getDatafromBackend } from "./js/backenddata.js";

// importing scss files
import './styles/style.scss'

// handle submit button variable
let submitButton = document.getElementById('generate');

submitButton.addEventListener('click', (e) => {
    handleSubmitButtonClickEvent(e)
})
