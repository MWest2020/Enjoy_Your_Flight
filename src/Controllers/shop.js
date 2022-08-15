const db = require("../Configs/mariabdConfigs");

exports.getCategories = async function (req, res) {
  const views = req.session.views;
  if (views && views.user) {
    let categories = await db.query("SELECT * FROM category");
    res.render("views/layout/base", {
      partials: {
        partial: "views/shop/index",
      },
      locals: { categories },
    });
  } else {
    res.redirect("/profile?err=You need a profile before shopping");
  }
};

exports.getCategoryProducts = async function (req, res) {
  const views = req.session.views;
  if (views && views.user) {
    let category = req.params.category;
    let products = await db.query(
      `SELECT *
             FROM product
             WHERE category_name = '${category}'`
    );
    const categoryText =
      category.charAt(0).toUpperCase() + category.slice(1).replace("_", " ");
    res.render("views/layout/base", {
      partials: {
        partial: "views/shop/id",
      },
      locals: { products, category: categoryText },
    });
  } else {
    res.redirect("/profile?err=You need a profile before shopping");
  }
};

function checkProduct(req, views, product, productId, amount) {
  const isFound = views.user.cart.some((element) => {
    return Number(element.id) === Number(productId);
  });

  if (isFound) {
    views.user.cart.filter((item) => {
      if (Number(item.id) === Number(productId)) {
        item.totalAmount = Number(item.totalAmount) + Number(amount);
        return item;
      }
      return item;
    });
  } else {
    product[0].totalAmount = parseInt(amount);
    req.session.views.user.cart.push(product[0]);
  }
}

exports.addProduct = async function (req, res) {
  const err = req.query.err;
  const amount = req.body.amount;
  const productId = req.body.productId;
  const views = req.session.views;

  db.query("SELECT * FROM `product` WHERE id = ?", [productId])
    .then((product) => {
      if (product[0] !== undefined && product[0] !== null) {
        if (views && views.user) {
          checkProduct(req, views, product, productId, amount);
          views.user.totalPrice = views.user.cart
            .map((p) => p.price * p.totalAmount)
            .reduce((a, b) => a + b);
          res.redirect("/shop");
        }
      } else {
        console.log(err);
        res.redirect("/shop?err=Something went wrong.");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
