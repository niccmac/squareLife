// Backend server
const express = require("express");
const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

// Record requests to server
const morgan = require("morgan");
app.use(morgan("dev"));

// Secures HTTP by setting various HTTP headers
const helmet = require("helmet");
app.use(helmet());

// Manage Cookies
const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    name: "session",
    keys: ["password", "cookie", "squarelife", "anotherkey"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Password encryption
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

// Res body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("Square Life ◼️");
  console.log(req.body);
});

app.listen(PORT);
