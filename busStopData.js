export async function busStopData(latitude, longitude) {
    const url = `https://api.tfl.gov.uk/StopPoint/?lat=${latitude}&lon=${longitude}&stopTypes=NaptanPublicBusCoachTram`
    let response = await fetch(url);
    let busData = await response.json();
    console.log(busData.stopPoints[0].id)
    console.log(busData.stopPoints[0].commonName);
    console.log(busData.stopPoints[1].id)
    console.log(busData.stopPoints[1].commonName);
}