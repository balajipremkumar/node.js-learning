const express = require("express");
const path = require("path");

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send({
    forecast: "it is showing",
    location: "hosur",
  });
});
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
