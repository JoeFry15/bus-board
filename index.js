import { busStopData } from "./busStopData.js";
import { coordinates } from "./coordinates.js";
import { busArrival } from "./busArrival.js";

let ourcoordinates = await coordinates();

let busStopInfo = await busStopData(ourcoordinates);

if (busStopInfo.length === 0) {
    console.log("There are no stops nearby")
} else {

    for (let i = 0; i < Math.min(busStopInfo.length, 2); i++) {
        let busTimesInfo = await busArrival(busStopInfo[i].id);
        console.log(`${busStopInfo[i].commonName} (ID: ${busStopInfo[i].id} ) \nService number | Destination | Minutes til arrival`);
        console.log(busTimesInfo.length !== 0 ? busTimesInfo : "No buses found at this stop.");
    }
}



