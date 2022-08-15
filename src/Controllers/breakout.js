const db = require("../Configs/mariabdConfigs");

exports.game = async function (req, res) {
  const views = req.session.views;
  if (views && views.user) {
    let gameProfile = await db.query(
      "SELECT * FROM gameProfile WHERE user_seatNumber = ?",
      [views.user.seatNumber]
    );
    res.render("views/games/breakout/game", {
      locals: { gameProfile: gameProfile[0] },
    });
  } else {
    res.redirect("/profile?err=You need a profile before playing this game");
  }
};

exports.gameover = async function (req, res) {
  const score = req.params.score;
  const views = req.session.views;
  if (views && views.user) {
    const gameProfile = await db.query(
      "SELECT * FROM gameProfile WHERE user_seatNumber = ?",
      [views.user.seatNumber]
    );
    if (gameProfile[0].score < score) {
      await db.query(
        "UPDATE gameProfile SET score = ? WHERE user_seatNumber = ?",
        [score, views.user.seatNumber]
      );
    }
    res.render("views/games/breakout/gameover", {
      locals: { score },
    });
  } else {
    res.redirect("/profile?err=You need a profile before saving your score");
  }
};

exports.leaderboard = async function (req, res) {
  const topPlayers = await db.query(
    "SELECT score, user.firstname, user.lastName, user.seatNumber FROM gameProfile inner join user on gameProfile.user_seatNumber = user.seatNumber where user.seatNumber != 9999 ORDER BY score DESC LIMIT 5"
  );
  const reformatlist = topPlayers.map((player) => {
    const fullName = getFullName(
      player.firstname,
      player.lastName,
      player.seatNumber
    );
    return {
      score: player.score,
      user: fullName,
    };
  });
  while (reformatlist.length < 5) {
    reformatlist.push({ score: 0, user: "---" });
  }
  res.render("views/games/breakout/leaderboard", {
    locals: { topPlayers: reformatlist },
  });
};

exports.menu = function (req, res) {
  const views = req.session.views;
  if (views && views.user) {
    res.render("views/games/breakout/menu");
  } else {
    res.redirect("/profile?err=You need a profile before playing this game");
  }
};

exports.options = async function (req, res) {
  const views = req.session.views;
  if (views && views.user) {
    let gameProfile = await db.query(
      "SELECT * FROM gameProfile WHERE user_seatNumber = ?",
      [views.user.seatNumber]
    );
    res.render("views/games/breakout/options", {
      locals: { gameProfile: gameProfile[0] },
    });
  } else {
    res.redirect("/profile?err=You need a profile before playing this game");
  }
};

exports.saveOptions = async function (req, res) {
  const ballSpeed = req.body.ballSpeed;
  const brickRowCount = req.body.brickRowCount;
  const lives = req.body.lives;
  const views = req.session.views;

  if (views && views.user) {
    db.query(
      "UPDATE gameProfile SET ballSpeed = ?, brickRowCount = ?, lives = ? WHERE user_seatNumber = ?",
      [ballSpeed, brickRowCount, lives, views.user.seatNumber]
    );
    res.redirect("/entertainment/games/breakout/menu");
  } else {
    res.redirect(
      "/profile?err=You need a profile before changing your options"
    );
  }
};
