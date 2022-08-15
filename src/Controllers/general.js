exports.index = async function (req, res) {
  const views = req.session.views;
  if (views && views.isAdmin) {
    res.render("views/layout/base", {
      locals: { isAdmin: true },
      partials: {
        partial: "index",
      },
    });
  } else {
    res.render("views/layout/base", {
      locals: { isAdmin: false },
      partials: {
        partial: "index",
      },
    });
  }
};
