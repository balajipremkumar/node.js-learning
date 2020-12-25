const express = require("express");
const path = require("path");

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

// exprss config
const app = express();

// Define paths ofr Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates");

// setup handelbars engine & views location
app.set("view engine", "hbs");
app.set("views", viewPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "weather App",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    message: "This page will help you with help documents",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "it is showing",
    location: "hosur",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
