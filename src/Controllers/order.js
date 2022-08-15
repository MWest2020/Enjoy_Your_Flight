const db = require("../Configs/mariabdConfigs");

exports.getOrders = async function (req, res) {
  const views = req.session.views;
  if (views && views.isAdmin) {
    let orders = await db.query(
      "SELECT * FROM `order` ORDER BY user_seatNumber ASC;"
    );
    orders.map((order) => {
      order.time = order.time.toLocaleString();
    });
    res.render("views/layout/base", {
      partials: {
        partial: "views/order/index",
      },
      locals: { orders },
    });
  } else {
    res.redirect("/");
  }
};

exports.getOrderDetails = async function (req, res) {
  const views = req.session.views;
  if (views && views.isAdmin) {
    const orderId = req.query.orderId;
    const err = req.query.err;
    let orderDetails = await db.query(
      "select orderline.amount, product.name, product.price from orderline left join product on product.id  = orderline.product_id where orderline.order_orderNumber = ?;",
      [orderId]
    );
    let order = await db.query(
      "select orderNumber, user_seatNumber, status from `order` where ordernumber = ?;",
      [orderId]
    );
    orderDetails.map((order) => {
      let subTotal = order.price * order.amount;
      subTotal = subTotal.toFixed(2);
      order.subtotal = subTotal;
    });
    let total = orderDetails
      .reduce((acc, curr) => acc + curr.price * curr.amount, 0)
      .toFixed(2);
    res.render("views/layout/base", {
      partials: {
        partial: "views/order/id",
      },
      locals: { orderDetails, order, total, err },
    });
  } else {
    res.redirect("/");
  }
};

exports.finishOrder = async function (req, res) {
  const views = req.session.views;

  if (views && views.isAdmin) {
    const orderId = req.query.orderId;
    const status = req.query.status;
    try {
      await db.query("UPDATE `order` SET status = ? WHERE orderNumber = ?;", [
        status,
        orderId,
      ]);
      res.redirect("/order");
    } catch (err) {
      res.redirect("/order/id?orderId=" + orderId + "&err=" + err);
    }
  } else {
    res.redirect("/");
  }
};
