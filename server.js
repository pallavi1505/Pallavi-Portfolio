require("dotenv").config;
const express = require("express")
const cors= require("cors")
const path = require("path");

const contactRoute = require('./route/contactRoute')
const app = express();

//creating middleware
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

const port= process.env.PORT || 5500;
app.listen(port, console.log(`server listning to port 5500 only`));
