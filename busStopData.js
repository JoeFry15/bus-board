export async function busStopData(latitude, longitude) {
    const url = `https://api.tfl.gov.uk/StopPoint/?lat=${latitude}&lon=${longitude}&stopTypes=NaptanPublicBusCoachTram`
    let response = await fetch(url);
    let busData = await response.json();
    return {
        stop1id: busData.stopPoints[0].id,
        stop2id: busData.stopPoints[1].id,
        stop1name: busData.stopPoints[0].commonName,
        stop2name: busData.stopPoints[1].commonName,
    }
}

