// in de configs map willen we alle configuraties die we nodig hebben om de app ee te kunnen draaien
// hier in deze file komt dus de connectie met de database
// in de Test map komt er dan een file mariadbConfigsTest.js waar we die connectie kunnen testen
const mariadb = require("mariadb");

const db = mariadb.createPool({
  host: "localhost",
  user: "rroot",
  password: "admin",
  database: "mydb",
});

module.exports = db;
