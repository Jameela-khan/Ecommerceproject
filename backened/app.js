const express = require("express");

const app =  express();
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
app.use(express.json())
//Routes  Imports
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());
const product = require("./routes/productRoute");

app.use("/api/v1",product);

//middleware for errors

app.use(errorMiddleware);

module.exports = app