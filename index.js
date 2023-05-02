const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
const chefs = require("./data/chefData.json");

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Get all chefs data
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log(`My server is running on port: ${port}`);
});
