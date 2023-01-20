export async function busArrival(id) {
    const url = `https://api.tfl.gov.uk/StopPoint/${id}/Arrivals`
    let response = await fetch(url);
    let arrivalData = await response.json();

    let busQuant = Math.min(arrivalData.length, 5);

    const busArrivals = [];
    for (let i = 0; i < busQuant; i++) {
        busArrivals.push({
            line: arrivalData[i].lineId,
            destination: arrivalData[i].destinationName,
            time: (Math.floor(arrivalData[i].timeToStation / 60))
        });
    }

    var sortedArray = busArrivals.sort(function (arrivalA, arrivalB) {
        return arrivalA.time - arrivalB.time;
    });

    return sortedArray;
}

// const response = await fetch ("https://api.digital.tfl.gov.uk/Journey/JourneyResults/W1T1JU/to/490000235YB")
// console.log(response);