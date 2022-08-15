// const db = require("../Configs/mariabdConfigs");
// let memory = require("/public/js/memory/interactive.js")
//
// let playerDate = memory.player.dateTime;
// let playerName = memory.player.name;
// let playerBeurten = memory.player.aantalBeurten;
// let playertijdsDuur = memory.player.tijdsDuur;
//
// let query = 'INSERT INTO memory_highscore(dateTime, name, aantalBeurten, tijdsDuur) VALUES (?, ?, ?, ?)',
//     [playerDate, playerName, PlayerBeurten, playertijdsDuur];
//
// function insertHighscore() {
//     db.query('INSERT INTO memory_highscore(dateTime, name, aantalBeurten, tijdsDuur) VALUES (?, ?, ?, ?)',
//         [playerDate, playerName, PlayerBeurten, playertijdsDuur]);
// }

const db = require("../Configs/mariabdConfigs");

exports.index = async function (req, res) {
    const err = req.query.err;
    res.render("views/memory/index", { locals: { err } });
};


exports.submitHighscore = async function (req, res) {
    let playerDate = req.body.date;
    let playerName = req.body.name;
    let playerBeurten = req.body.turnsTaken;
    let playertijdsDuur = req.body.time;
        try {
                const highscore = await db.query(
                    "INSERT INTO `memory_highscore` (dateTime, name, aantalBeurten, tijdsDuur) VALUES (?, ?, ?, ?);",
                    [playerDate, playerName, +playerBeurten, +playertijdsDuur]
                );
            res.redirect("/entertainment/games/hall_of_fame");
        } catch (err) {
            console.log(err);
        }
};

exports.getHighScoresBeurten = async function (req, res) {
    try {
        const highscoresBeurt = await db.query(
            "SELECT * FROM `memory_highscore` ORDER BY `aantalBeurten`;"
        );
        const resolvedate = highscoresBeurt.map((x) =>{
            const formatdateBeurt = x.dateTime.getDate() + '-' + x.dateTime.getMonth() + '-' + x.dateTime.getFullYear();
            return {dateTime: formatdateBeurt, name: x.name, aantalBeurten: x.aantalBeurten, tijdsDuur: x.tijdsDuur};
        })
        res.render('views/memory/hall_of_fame', {locals: {resolvedate}})
    }catch (err) {
        console.log(err);
    }
};

exports.getHighScoresTijd = async function (req, res) {
    try {
        const highscoresTijd = await db.query(
            "SELECT * FROM `memory_highscore` ORDER BY `tijdsDuur`;"
        );
        console.log(highscoresTijd);
        const resolvedateTijd = highscoresTijd.map((x) =>{
            const formatdate = x.dateTime.getDate() + '-' + x.dateTime.getMonth() + '-' + x.dateTime.getFullYear();
            return {dateTime: formatdate, name: x.name, aantalBeurten: x.aantalBeurten, tijdsDuur: x.tijdsDuur};
        })
        console.log(resolvedateTijd);
        res.render('views/memory/hall_of_fame', {locals: {resolvedateTijd}})
    }catch (err) {
        console.log(err);
    }
};