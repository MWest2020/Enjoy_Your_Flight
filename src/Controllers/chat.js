exports.index = function (req, res) {
  const views = req.session.views;
  if (views) {
    res.render("views/layout/base", {
      partials: {
        partial: "views/chat/index",
      },
      locals: { user: views["user"] },
    });
  } else {
    res.redirect("profile?err=You need a profile before chatting");
  }
};
