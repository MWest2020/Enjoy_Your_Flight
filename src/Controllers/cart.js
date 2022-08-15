const db = require("../Configs/mariabdConfigs");

exports.getCart = async function (req, res) {
  const views = req.session.views;
  if (views && views.user && views.user.cart) {
    let user = views.user;
    res.render("views/layout/base", {
      partials: {
        partial: "views/cart/index",
      },
      locals: { user },
    });
  } else {
    res.redirect("/profile?err=You need a profile before shopping");
  }
};

exports.deleteProducts = async function (req, res) {
  const views = req.session.views;
  if (views && views.user && views.user.cart) {
    views.user.cart = [];
    views.user.totalPrice = 0;
    res.redirect("/cart");
  } else {
    res.redirect("/profile?err=You need a profile before shopping");
  }
};

exports.deleteProduct = async function (req, res) {
  const productId = req.body.productId;
  const views = req.session.views;

  if (views && views.user && views.user.cart && productId) {
    views.user.cart = views.user.cart.filter((product) => {
      return Number(product.id) !== Number(productId);
    });

    views.user.cart.length !== 0
      ? (views.user.totalPrice = views.user.cart
          .map((p) => p.price * p.totalAmount)
          .reduce((a, b) => a + b))
      : (views.user.totalPrice = 0);

    res.redirect("/cart");
  } else {
    res.redirect("/profile?err=You need a profile before shopping");
  }
};

exports.editAmount = async function (req, res) {
  const productId = req.body.productId;
  const views = req.session.views;

  if (views && views.user && views.user.cart && productId) {
    views.user.cart.filter((item) => {
      if (Number(item.id) === Number(productId)) {
        if (req.originalUrl === "/cart/addAmount") {
          item.totalAmount++;
        }
        if (req.originalUrl === "/cart/reduceAmount") {
          item.totalAmount--;
        }
        return item;
      }
      return item;
    });
    views.user.cart = views.user.cart.filter((product) => {
      return Number(product.totalAmount) !== 0;
    });
    views.user.totalPrice = views.user.cart
      .map((p) => p.price * p.totalAmount)
      .reduce((a, b) => a + b);
    res.redirect("/cart");
  } else {
    res.redirect("/profile?err=You need a profile before shopping");
  }
};

exports.addOrder = async function (req, res) {
  const views = req.session.views;

  if (views.user.cart.length > 0) {
    if (views && views.user) {
      const order = await db.query(
        "INSERT INTO `order` (user_seatNumber, time, status) VALUES (?, ?, ?)",
        [views.user.seatNumber, new Date(), "open"]
      );
      const orderId = parseInt(order.insertId);

      views.user.cart.map((product) => {
        db.query(
          "INSERT INTO `orderline` (order_orderNumber, product_id, amount) VALUES (?, ?, ?)",
          [orderId, product.id, product.totalAmount]
        )
          .then((order) => {
            views.user.cart = [];
            views.user.totalPrice = 0;
            res.redirect("/");
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } else {
      res.redirect("/profile?err=You need a profile before shopping");
    }
  } else {
    res.redirect("/cart");
  }
};
