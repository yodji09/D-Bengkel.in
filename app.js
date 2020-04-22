"use strict"

const express = require('express');

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));

const routes = require("./routes");

app.use("/", routes);

app.listen(port, () => {
    console.log('app listen to port', port);
})