console.log("RUNNING SERVER.JS WITH PRODUCTS ROUTE");


console.log("SERVER.JS LOADED");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5050;

// middleware
app.use(cors());
app.use(express.json());

// TEMP FAKE PRODUCTS (this simulates a database)
const products = [
  { id: 1, name: "T-Shirt", price: 25 },
  { id: 2, name: "Hoodie", price: 45 },
  { id: 3, name: "Hat", price: 20 }
];

// test route
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

// ✅ PRODUCTS API
app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
