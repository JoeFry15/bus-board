import { busStopData } from "./busStopData.js";
import { coordinates } from "./coordinates.js";
import { busArrival } from "./busArrival.js";



let ourcoordinates = await coordinates();

let busStopInfo = await busStopData(ourcoordinates);

let busTimesInfoS1 = await busArrival(busStopInfo.stop1id);

let busTimesInfoS2 = await busArrival(busStopInfo.stop2id);


console.log(busStopInfo.stop1name + " (ID:" + busStopInfo.stop1id + ")" + "\nService number | Destination | Minutes til arrival");
console.log(busTimesInfoS1.length !== 0 ? busTimesInfoS1 : "No buses found at this stop.");

console.log(busStopInfo.stop2name + " (ID:" + busStopInfo.stop2id + ")" + "\nService number | Destination | Minutes til arrival");
console.log(busTimesInfoS2.length !== 0 ? busTimesInfoS2 : "No buses found at this stop.");
