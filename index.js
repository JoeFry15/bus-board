fetch('https://api.tfl.gov.uk/StopPoint/?lat=51.654458&lon=-0.188359&stopTypes=NaptanPublicBusCoachTram', {

    })
    .then(response => {
        console.log(response.status);
        console.log(response.text());
        console.log(respgutonse.stopLetter)
    })
    .catch(err => console.error(err));
    