const middleware = require("../Middlewares/flightInfo");
const StaticMaps = require("staticmaps");
const db = require("../Configs/mariabdConfigs");

exports.index = async function (req, res) {
  let flights = await middleware.getCurrentFlight(flightData.flight.iata);
  let flightDetails = flights.data.filter(
    (flight) =>
      flight.flight_date === flightData.flight_date && flight.live !== null
  );
  let departureGeo = await middleware.getGeo(flightData.departure.iata);
  let arrivalGeo = await middleware.getGeo(flightData.arrival.iata);
  let longitudePlane = flightDetails[0].live.longitude;
  let latitudePlane = flightDetails[0].live.latitude;
  let destinationName = arrivalGeo.name;
  let destinationCountry = arrivalGeo.country;
  let originName = departureGeo.name;
  let originCountry = departureGeo.country;
  let altitudePlane = flightDetails[0].live.altitude;
  let speedPlane = flightDetails[0].live.speed_horizontal;

  let longitudeArrival = arrivalGeo.longitude;
  let longitudeDeparture = departureGeo.longitude;
  let latitudeArrival = arrivalGeo.latitude;
  let latitudeDeparture = departureGeo.latitude;
  let options = {
    width: 1920,
    height: 1080,
    // tileUrl: 'https://map1.vis.earthdata.nasa.gov/wmts-webmerc/BlueMarble_NextGeneration/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg',
  };
  let map = new StaticMaps(options);

  let marker = {
    img: "public/images/airplane_noback.png",
    offsetX: 24,
    offsetY: 48,
    width: 48,
    height: 48,
    // coord : [longitude, latitude]
  };
  let origin = {
    img: "public/images/origin.png",
    offsetX: 24,
    offsetY: 48,
    width: 48,
    height: 48,
    // coord : [longitude, latitude]
  };
  let destination = {
    img: "public/images/arrival.png",
    offsetX: 24,
    offsetY: 48,
    width: 20,
    height: 33,
    // coord : [longitude, latitude]
  };

  marker.coord = [longitudePlane, latitudePlane];
  map.addMarker(marker);
  origin.coord = [
    parseFloat(longitudeDeparture),
    parseFloat(latitudeDeparture),
  ];
  map.addMarker(origin);
  destination.coord = [
    parseFloat(longitudeArrival),
    parseFloat(latitudeArrival),
  ];
  map.addMarker(destination);

  await map.render();
  await map.image.save("public/images/bbox.png");

  res.render("views/layout/base", {
    partials: {
      partial: "views/flightInfo/index",
    },
    locals: {
      map,
      destinationName,
      destinationCountry,
      originName,
      originCountry,
      altitudePlane,
      speedPlane,
    },
  });
};
