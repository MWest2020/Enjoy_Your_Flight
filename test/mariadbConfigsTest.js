// hier komen dan de calls om de connectie met de database te testen
// je noemt de file hetzelfde van hetgeen wat je gaat testen met Test erachter
// het kan zijn dat je nog geen mariadb heb, om dit te installeren raadpleeg de database.md in de docs folder
// om deze test uit te voeren run `node .\test\mariadbConfigsTest.js`
const db = require("../src/Configs/mariabdConfigs");

db.getConnection((err) => {
  if (err) {
    throw err;
  }
  console.log("connected");
});

async function dbTest() {
  const results = await db.query("SELECT 1");
  console.log(results);
}
dbTest();
