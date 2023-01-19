export async function coordinates(postcode) {
    const url = "https://api.postcodes.io/postcodes/" + postcode
    let response = await fetch(url);
    let coordinates = await response.json();
    return { longitude: coordinates.result.longitude, latitude: coordinates.result.latitude }
}
