const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index", { message: "Hello from Node.js" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("*", (req, res) => {
  res.status(404).render("index", { message: "Not found" });
});
