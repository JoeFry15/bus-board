export async function busArrival(id) {
    const url = `https://api.tfl.gov.uk/StopPoint/{${id}/Arrivals`
    let response = await fetch(url);
    let arrivalData = await response.json();
}