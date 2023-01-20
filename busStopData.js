export async function busStopData(ourcoordinates) {
    let url = `https://api.tfl.gov.uk/StopPoint/?lat=${ourcoordinates.latitude}&lon=${ourcoordinates.longitude}&stopTypes=NaptanPublicBusCoachTram`;
    let response = await fetch(url);
    let busData = await response.json();

    return busData.stopPoints
}


