import { busStopData } from "./busStopData.js";
import { coordinates } from "./coordinates.js";
import { busArrival } from "./busArrival.js";

let ourcoordinates = await coordinates("W1T1JU");
let latitude = ourcoordinates.latitude;
let longitude = ourcoordinates.longitude;

let busStopInfo = await busStopData(latitude, longitude);

console.log(busStopInfo.stop1name);
console.log(await busArrival(busStopInfo.stop1id));

console.log(busStopInfo.stop2name);
console.log(await busArrival(busStopInfo.stop2id));