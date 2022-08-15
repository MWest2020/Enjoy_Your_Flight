// om deze test uit te voeren moet je `node ./test/flightInfoTest.js` uitvoeren
const api_helper = require("../src/Middlewares/flightInfo");
const {getFlights} = require("../src/Middlewares/flightInfo");

async function getAllData() {
  const response = await api_helper.getFlightInfo();

  console.log(response);
}

async function getData() {
  let response = undefined
  while (response === undefined) {
    response = await api_helper.getFlight();
  }
  console.log(response);
}

// getAllData()
getData()
