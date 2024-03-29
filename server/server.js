// Backend server
const morgan = require("morgan"); // Record requests to server
const express = require("express");
const cookieSession = require("cookie-session");
const helmet = require("helmet"); // Secures HTTP by setting various HTTP headers
const bcrypt = require("bcryptjs");

const bodyParser = require("body-parser");
const config = require("./config/configuration");

const db = require("./models/index");

// db.Users.create({
//   email: "nicole.mac0404@gmail.com",
//   username: "Nicole",
//   password: "123",
// }).then(() => {
//   console.log("saved");
// });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(helmet());
app.use(
  cookieSession({
    name: "session",
    keys: ["password", "cookie", "squarelife", "anotherkey"],

    // Cookie Opti
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use(morgan("dev"));

// // Password encryption
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0//", salt);

// // Routes
const users = require("./routes/users");
const tasks = require("./routes/tasks");
const squares = require("./routes/squares");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");

// // Mount all resource routes
app.use("/api/tasks", tasks(db));
app.use("/api/users", users(db, salt, hash));
app.use("/api/squares", squares(db));
app.use("/api/login", loginRoute(db));
app.use("/api/logout", logoutRoute(db));

app.get("/", (req, res) => {
  res.send("Square Life ◼️");
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
