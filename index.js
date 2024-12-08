const express = require("express");
const morgan = require("morgan");
const session = require("express-session");

const userRouter = require("./routes/user.route");
const dashboardRouter = require("./routes/dashboard.route");

require("dotenv").config();
require("./libs/dbConnect");
const app = express();
app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.AUTH_secret,
    saveUninitialiazed: true,
    resave: false,
  })
);

app.use("/", userRouter);
app.use("/dashboard", dashboardRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("*", (req, res) => {
  res.status(404).render("index", { message: "Not found" });
});
