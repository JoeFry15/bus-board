export async function busStopData(ourcoordinates) {
    let url = `https://api.tfl.gov.uk/StopPoint/?lat=${ourcoordinates.latitude}&lon=${ourcoordinates.longitude}&stopTypes=NaptanPublicBusCoachTram`;
    let response = await fetch(url);
    let busData = await response.json();

    if (busData.stopPoints[0] === undefined) {
        console.log("Postcode entered is not near any bus stops.");
        process.exit();
    } else {
        return {
            stop1id: busData.stopPoints[0].id,
            stop2id: busData.stopPoints[1].id,
            stop1name: busData.stopPoints[0].commonName,
            stop2name: busData.stopPoints[1].commonName,
        }
    }

}
