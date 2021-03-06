// Backend server
const morgan = require("morgan"); // Record requests to server
const express = require("express");
const cookieSession = require("cookie-session");
const helmet = require("helmet"); // Secures HTTP by setting various HTTP headers
const bcrypt = require("bcryptjs");
const { Sequelize } = require("sequelize"); // ORM
const bodyParser = require("body-parser");
const config = require("./config/configuration");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(helmet());
app.use(
  cookieSession({
    name: "session",
    keys: ["password", "cookie", "squarelife", "anotherkey"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use(morgan("dev"));

// Password encryption
const salt = bcrypt.genSaltSync(10);

// DB Set up

const sequelize = new Sequelize(
  `postgres://${config.dbuser}:${config.dbpassword}@${config.dbhost}:${config.dbport}/${config.dbname}`
);

// Routes
// const users = require("./routes/users");
// const tasks = require("./routes/tasks");
// const squares = require("./routes/squares");
// const loginRoute = require("./routes/login");
// const logoutRoute = require("./routes/logout");

// Mount all resource routes
// app.use("/task", tasks(db));
// app.use("/user", users(db));
// app.use("/squares", squares(db));
// app.use("/login", loginRoute(db));
// app.use("/logout", logoutRoute(db));

app.get("/", function (req, res) {
  res.send("Square Life ◼️");
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
