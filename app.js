const http = require("http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const db = require("./src/Configs/mariabdConfigs");
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);
const middleware = require("./src/Middlewares/flightInfo");

// load all the routers
const general = require("./src/Routes/general");
const entertainment = require("./src/Routes/entertainment");
const movies = require("./src/Routes/movies");
const music = require("./src/Routes/music");
const chat = require("./src/Routes/chat");
const flightInfo = require("./src/Routes/flightInfo");
const shop = require("./src/Routes/shop");
const profile = require("./src/Routes/profile");
const cart = require("./src/Routes/cart");
const order = require("./src/Routes/order");
// html engine
const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", path.join(__dirname, "src"));
app.set("view engine", "html");

// session storage
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// body parser form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// the app will now be able to handle the requests
app.use("/", general); /* /general, /general/settings and /general/shutDown */
app.use(
  "/entertainment",
  entertainment
); /* /entertainment/music, /entertainment/books,
  /entertainment/games and /entertainment/movies */
app.use("/movies", movies); /* /movies */
app.use("/music", music); /* music */
app.use("/chat", chat); /* /chat */
app.use(
  "/flightInfo",
  flightInfo
); /* /flightInfo and /flightInfo/destinationInfo */
app.use("/shop", shop); /* / and /products/:category*/
app.use("/order", order);
app.use("/profile", profile);
app.use("/cart", cart);

app.use(express.json());
app.use(express.static("public"));
app.use("/media", express.static("/media/INTENSO/"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));
app.use(
  "public",
  express.static(path.join(__dirname + "node_modules/bootstrap/dist/css"))
);
app.use(
  "public",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
  "public",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

middleware
  .getActiveFlights()
  .then((response) => {
    const flights = response.data.filter((e) => e.live !== null);
    global.flightData = flights[0];
  })
  .catch((err) => {
    console.log(err);
  });

//connect to database once app is started
db.getConnection((err) => {
  if (err) {
    throw err;
  }
  console.log("connected");
});

// create admin user
const hash = bcrypt.hashSync("admin", 10);
db.query(
  "SELECT * FROM `user` WHERE seatNumber = 9999 AND firstName = 'admin' AND lastName = 'admin'"
).then((adminUser) => {
  if (adminUser.length === 0) {
    db.query(
      "INSERT INTO `user` (seatNumber, firstName, lastName, password) VALUES (?, ?, ?, ?)",
      [9999, "admin", "admin", hash]
    );
  }
});

//make the connection global
global.db = db;

//to keep the connection alive, make frequent quries to SQL database
setInterval(function () {
  db.query("SELECT 1");
}, 5000);

function getFullName(firstName, lastName, seatNumber) {
  if (firstName.length > 0 && lastName.length > 0) {
    return firstName + " " + lastName;
  }
  if (firstName.length > 0) {
    return firstName;
  }
  return seatNumber;
}

global.getFullName = getFullName;

io.on("connection", (socket) => {
  db.query(
    "SELECT message, seatNumber, firstname, lastName, time FROM chat inner join `user` on `user`.seatNumber = chat.user_seatNumber order by time"
  )
    .then((results) => {
      results.forEach((result) => {
        const fullName = getFullName(
          result.firstname,
          result.lastName,
          result.seatNumber
        );
        socket.emit("chat message", {
          msg: result.message,
          user: fullName,
          time: result.time.toLocaleString(),
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  socket.on("chat message", (obj) => {
    const fullName = getFullName(
      obj.user.firstName,
      obj.user.lastName,
      obj.user.seatNumber
    );
    const time = new Date(obj.time).toLocaleString();
    io.emit("chat message", {
      msg: obj.msg,
      user: fullName,
      time: time,
    });
    db.query(
      `INSERT INTO chat (message, user_seatNumber, time) VALUES (?, ?, ?)`,
      [obj.msg, +obj.user.seatNumber, new Date()]
    );
  });
});

const port = 3000;

server.listen(port);
console.debug("Server listening on port " + port);
