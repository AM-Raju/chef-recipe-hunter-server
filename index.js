const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
const chefs = require("./data/chefData.json");
const recipes = require("./data/reciepes.json");

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Get all chefs data
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((chef) => chef.id === id);
  res.send(selectedChef);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(port, () => {
  console.log(`My server is running on port: ${port}`);
});
