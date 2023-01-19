import { postcodeRequest } from "./postcodeRequest.js";


export async function coordinates() {

    let postcode = postcodeRequest('What is your postcode? ');
    let url = "https://api.postcodes.io/postcodes/" + postcode
    let response = await fetch(url);
    let coordinates = await response.json()

    while (!coordinates.result) {
        postcode = postcodeRequest("Please enter a valid postcode: ");
        url = "https://api.postcodes.io/postcodes/" + postcode
        response = await fetch(url);
        coordinates = await response.json()
    }

    return { longitude: coordinates.result.longitude, latitude: coordinates.result.latitude };

}
