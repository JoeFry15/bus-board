import { busStopData } from "./busStopData.js";
import { coordinates } from "./coordinates.js";

let ourcoordinates = await coordinates("EN55LP");
let latitude = ourcoordinates.latitude;
let longitude = ourcoordinates.longitude;

busStopData(latitude,longitude)
