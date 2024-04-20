import * as countryList from "country-list";
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function emailValidate(email) {
    return email.length === 0 || emailRegExp.test(email);
    
}

function passwordValidate(password) {
    return password.length > 8 && passwordRegExp.test(password);
}

function passwordConfirmValidate(password, passwordConfirm) {
    return password === passwordConfirm;
}

function countryValidate(country) {
    return countryList.getCode(country) !== undefined;
}

function countryZipValidate(country, zip) {
    // assumes country is valid
    const countryCode = countryList.getCode(country);
    if (postcodeValidatorExistsForCountry(countryCode)) {
        return postcodeValidator(zip, countryCode);
    }
    // eslint-disable-next-line no-console
    console.log(`Unable to validate ZIP code for country: ${country}`);
    return false;
}



export {emailValidate, passwordConfirmValidate, passwordValidate, countryValidate, countryZipValidate};