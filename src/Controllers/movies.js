const resolver = require("../../public/js/getFileNames");

exports.details = async (req, res) => {
  const name = req.params.id;

  const paths = {
    mp3: resolver.getPathNames("mp3", "/media/INTENSO/Audio"),
    mp4: resolver.getPathNames("mp4", "/media/INTENSO/Movies"),
  };
  const currentPath = paths.mp4.find((path) => path.includes(name));
  res.render("views/layout/base", {
    partials: {
      partial: "views/movies/id",
    },
    locals: { name, currentPath },
  });
};

exports.index = async (req, res) => {
  const fileNames = {
    mp3: resolver.getFileNames("mp3", "/media/INTENSO/Audio"),
    mp4: resolver.getFileNames("mp4", "/media/INTENSO/Movies"),
  };
  res.render("views/layout/base", {
    partials: {
      partial: "views/movies/index",
    },
    locals: { mp4: fileNames.mp4 },
  });
};
