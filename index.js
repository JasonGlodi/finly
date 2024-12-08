const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/user.route");
require("dotenv").config();
require("./libs/dbConnect");
const app = express();
app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index", { message: "Hello from Node.js" });
});
app.use("/users", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("*", (req, res) => {
  res.status(404).render("index", { message: "Not found" });
});
