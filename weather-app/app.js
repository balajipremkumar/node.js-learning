const request = require("request");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("please provide an address");
} else {
  geoCode(address, (error, data) => {
    // console.log("Error ", error);
    // console.log("Data ", data);
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longtitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}

// console.log(process.argv);
