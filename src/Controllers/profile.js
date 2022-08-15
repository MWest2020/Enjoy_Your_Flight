const db = require("../Configs/mariabdConfigs");
const bcrypt = require("bcrypt");

exports.index = async function (req, res) {
  const err = req.query.err;
  res.render("views/layout/base", {
    partials: {
      partial: "views/profile/index",
    },
    locals: { err },
  });
};

exports.submitProfile = async function (req, res) {
  const seatNumber = req.body.seatNumber;
  const lastName = req.body.lastName;
  const firstName = req.body.firstName;
  const password = req.body.password;

  if (password) {
    try {
      const adminUser = await db.query(
        "SELECT * FROM `user` WHERE seatNumber = ? AND firstName = ? AND lastName = ?",
        [+seatNumber, firstName, lastName]
      );
      if (adminUser[0] != null) {
        const validatePassword = await bcrypt.compare(
          password,
          adminUser[0].password
        );
        if (validatePassword) {
          req.session.views = { user: adminUser[0], isAdmin: true };
          req.session.views.user.cart = [];
          req.session.views.user.totalPrice = 0;
          res.redirect("/");
        } else {
          res.redirect("/profile?err=wrongPassword");
        }
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const user = await db.query("SELECT * FROM `user` WHERE seatNumber = ?", [
        +seatNumber,
      ]);
      if (user.length === 0) {
        const user = await db.query(
          "INSERT INTO `user` (seatNumber, firstName, lastName) VALUES (?, ?, ?) RETURNING seatNumber, firstName, lastName;",
          [+seatNumber, firstName, lastName]
        );
        req.session.views = { user: user[0] };
        req.session.views.user.cart = [];
        req.session.views.user.totalPrice = 0;
        res.redirect("/");
      } else {
        res.redirect("/profile?err=seatNumberExists");
      }
    } catch (err) {
      console.log(err);
    }
  }
};
