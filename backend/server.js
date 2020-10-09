// const express = require("express");
// const dotenv = require("dotenv");
// const products = require("./data/products");

// ! ES Modules in NodeJS
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json())

// Home route
app.get("/", (req, res) => {
  res.send("Its working");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//! CUSTOMIZED ERROR HANDLER

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
