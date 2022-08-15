exports.index = async function (req, res) {
    const err = req.query.err;

    const gameValues = {
        speed: 100,
        grid: 'off',
        range: 1,
    }
    req.session.views = { snakeGame: gameValues };

    res.render("views/layout/base", {
        partials: {
            partial: "views/games/snake/index",
        },
        locals:  { error: err, game: gameValues},
    });
};

exports.start = async function (req, res) {
    const err = req.query.err;

    const gameValues = {
        speed: req.session.views.snakeGame.speed,
        grid: req.session.views.snakeGame.grid,
        range: req.session.views.snakeGame.range,
    }

    res.render("views/layout/base", {
        partials: {
            partial: "views/games/snake/game",
        },
        locals:  { error: err, game: gameValues },
    });
};

exports.options = async function (req, res) {
    const err = req.query.err;
    const speed = req.body.speed;
    let grid = req.body.grid;
    let timeout;

    switch(speed) {
        case '0':
            timeout = 150
            break;
        case '1':
            timeout = 100
            break;
        case '2':
            timeout = 50
            break;
        default:
            timeout = 100
    }

    if (!grid) {
        grid = 'off'
    }

    const gameValues = {
        speed: timeout,
        grid: grid,
        range: speed,
    }

    req.session.views = { snakeGame: gameValues };
    res.render("views/layout/base", {
        partials: {
            partial: "views/games/snake/index",
        },
        locals:  { error: err, game: gameValues },
    });
};