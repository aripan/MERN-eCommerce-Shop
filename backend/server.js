const express = require("express");

const products = require("./data/products");

const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Its working");
});

// All product route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Individual product route
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, console.log("Server listen on port 5000"));
