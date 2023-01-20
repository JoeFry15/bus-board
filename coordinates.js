import { postcodeRequest } from "./postcodeRequest.js";

export async function coordinates() {

    let coordinates;

    do {
        let postcode = postcodeRequest("Please enter a postcode: ");
        let url = "https://api.postcodes.io/postcodes/" + postcode;
        let response = await fetch(url);
        coordinates = await response.json();
    } while (!coordinates.result);

    return { longitude: coordinates.result.longitude, latitude: coordinates.result.latitude };

}
