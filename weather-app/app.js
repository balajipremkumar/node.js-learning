const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=1010f8fd2c4177741f00b425af129cf8&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   // const data = JSON.parse(response.body);
//   // console.log(data.current);
//   if (error) {
//     console.log("unable to connect to weather service!!");
//   } else if (response.body.error) {
//     console.log("unable to find location");
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]} its currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
//     );
//   }
// });

const geoUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFsYWppcHJlYW1rdW1hciIsImEiOiJja2l6ZHNwY3EzeDRjMzNwMzF1NHUzM2JpIn0.mP0sLDX7E5jv5TaZRp495g&limit=1";

request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to weather service !");
  } else if (response.body.features.length === 0) {
    console.log("unable to find location. Try another search");
  } else {
    const latitude = response.body.features[0].center[1];
    const longtitude = response.body.features[0].center[0];
    console.log(latitude, "latitude");
    console.log(longtitude, "longtitude");
  }
});
