// const express = require("express");
// const dotenv = require("dotenv");
// const products = require("./data/products");

// ! ES Modules in NodeJS
import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();

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

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running on ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
