const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const productsRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const app = express();
mongoose.connect("mongodb+srv://akram:lhn6gBVC2ZYurYvQ@cluster0-1uu5u.mongodb.net/olx?retryWrites=true&w=majority")
.then(()=> {
  console.log('connected to database');
})
.catch(() => {
  console.log("connection failed");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/products", productsRoutes);
app.use("/api/user", userRoutes);
  //lhn6gBVC2ZYurYvQ
module.exports = app;