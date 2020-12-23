const request = require("request");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geoCode("chennai", (error, data) => {
  console.log("Error ", error);
  console.log("Data ", data);
});

forecast(27.2046, 77.4977, (error, Data) => {
  console.log("Error ", error);
  console.log("Data ", Data);
});
