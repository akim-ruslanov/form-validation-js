import './style.css';
import { countryValidate, countryZipValidate, emailValidate, passwordValidate, passwordConfirmValidate } from './validation';

const form = document.getElementById("form");

const country = document.getElementById("country");
const countryError = document.getElementById("countryError");

const zip = document.getElementById('zip');
const zipError = document.getElementById('zipError');

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const passwordConfirm = document.getElementById('passwordConfirm');
const passwordConfirmError = document.getElementById('passwordConfirmError');

country.addEventListener("input", (event) => {
    event.preventDefault();
    if (!countryValidate(country.value)) {
        countryError.textContent = "Invalid country";
        countryError.style.opacity = 1;
        country.setCustomValidity("invalid");
    } else {
        countryError.textContent = "";
        countryError.style.opacity = 0;
        country.setCustomValidity("");
    }
});

zip.addEventListener("input", (event) => {
    event.preventDefault();
    if (!countryZipValidate(country.value, zip.value)) {
        zip.setCustomValidity("Zip incorrect");
        zipError.textContent = `Invalid ZIP for ${  country.value}`;
        zipError.style.opacity = 1;
    } else {
        zip.setCustomValidity("");
        zipError.textContent = "";
        zipError.style.opacity = 0;
    }
});

email.addEventListener("input", (event) => {
    event.preventDefault();
    if (!emailValidate(email.value)) {
        email.setCustomValidity('invalid');
        emailError.textContent = "Invalid Email";
        emailError.style.opacity = 1;
    } else {
        email.setCustomValidity('');
        emailError.textContent = "";
        emailError.style.opacity = 0;
    }
});

password.addEventListener("input", (event) => {
    event.preventDefault();
    if (!passwordValidate(password.value)) {
        password.setCustomValidity('invalid');
        passwordError.textContent = "Password does not conform to standards";
        passwordError.style.opacity = 1;
    } else {
        password.setCustomValidity('');
        passwordError.textContent = "";
        passwordError.style.opacity = 0;
    }
});

passwordConfirm.addEventListener("input", (event) => {
    event.preventDefault();
    if (!passwordConfirmValidate(password.value, passwordConfirm.value)) {
        passwordConfirm.setCustomValidity('invalid');
        passwordConfirmError.textContent = "Passwords don't match";
        passwordConfirmError.style.opacity = 1;
    } else {
        passwordConfirm.setCustomValidity('');
        passwordConfirmError.textContent = "";
        passwordConfirmError.style.opacity = 0;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

