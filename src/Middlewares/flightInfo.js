const request = require("request");
const api_key = "b17b3bb5250191316951cc0930e76414";
const api_base = "http://api.aviationstack.com/v1/";
const geo_api_base = "https://www.airport-data.com/api/ap_info.json?";

module.exports = {
  getGeo(query) {
    return new Promise((resolve, reject) => {
      request(
        `${geo_api_base}iata=${query}`,
        { json: true },
        (error, _, body) => {
          if (error) {
            reject(error);
          } else {
            resolve(body);
          }
        }
      );
    });
  },
  getActiveFlights() {
    return new Promise((resolve, reject) => {
      request(
        `${api_base}flights?access_key=${api_key}&flight_status=active`,
        { json: true },
        (error, _, body) => {
          if (error) {
            reject(error);
          } else {
            resolve(body);
          }
        }
      );
    });
  },
  getCurrentFlight(flightIata) {
    return new Promise((resolve, reject) => {
      request(
        `${api_base}flights?access_key=${api_key}&flight_status=active&flight_iata=${flightIata}`,
        { json: true },
        (error, _, body) => {
          if (error) {
            reject(error);
          } else {
            resolve(body);
          }
        }
      );
    });
  },
};
