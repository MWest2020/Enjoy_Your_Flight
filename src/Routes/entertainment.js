const express = require("express");
const path = require("path");
const memory = require("../Controllers/memory");
const router = express.Router();
const breakout = require("../Controllers/breakout");
const snake = require("../Controllers/snake");

// const music = require("../Controllers/music")

// router.get("/music", (req, res) => {
//   res.render("views/layout/base", {
//     partials: {
//       partial: "views/music/index",
//     },
//   });
// });

router.get("/games", (req, res) => {
  res.render("views/layout/base", {
    partials: {
      partial: "views/games/index",
    },
  });
});

router.get("/games/TicTacToe", (req, res) => {
  res.render("views/layout/base", {
    partials: {
      partial: "views/games/tictactoe",
    },
  });
});

router.get("/games/memory", (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/memory/index.html"));
  //__dirname : Will resolve to the project folder.
});

router.get(
  "/games/hall_of_fame",
  memory.getHighScoresBeurten,
  memory.getHighScoresTijd
);
router.get("/games/hall_of_fame/tijd", memory.getHighScoresTijd);

router.post("/games/submithighscore", memory.submitHighscore);

router.get("/games/phrasehunter", (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/games/phrasehunter.html"));
});

router.get("/games/breakout", breakout.game);
router.get("/games/breakout/menu", breakout.menu);
router.get("/games/breakout/leaderboard", breakout.leaderboard);
router.get("/games/breakout/options", breakout.options);
router.get("/games/breakout/gameover/:score", breakout.gameover);
router.post("/games/breakout/saveOptions", breakout.saveOptions);


router.get("/games/snake", snake.index);
router.get("/games/snake/start", snake.start);
router.post("/games/snake/options", snake.options);

module.exports = router;
