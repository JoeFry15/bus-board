import { busStopData } from "./busStopData.js";
import { coordinates } from "./coordinates.js";
import { busArrival } from "./busArrival.js";
import { postcodeRequest } from "./postcodeRequest.js";



// let postcode = await postcodeRequest;

let ourcoordinates = await coordinates("W1T1JU");

let busStopInfo = await busStopData(ourcoordinates.latitude, ourcoordinates.longitude);

console.log(busStopInfo.stop1name + " (ID:" + busStopInfo.stop1id + ")" + "\nService number | Destination | Minutes til arrival");
console.log(await busArrival(busStopInfo.stop1id));

console.log(busStopInfo.stop2name + " (ID:" + busStopInfo.stop2id + ")" + "\nService number | Destination | Minutes til arrival");
console.log(await busArrival(busStopInfo.stop2id));