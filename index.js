const express = require('express');
const app = express();
const ejs = require('ejs');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use("/styles", express.static(__dirname + "/styles"));
app.use("/scripts", express.static(__dirname + "/scripts"));
app.use("/images", express.static(__dirname + "/images"));

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


app.get('/read', (req, res) => {
    res.render('read');
})

app.get('/test', (req, res) => {
    res.render('typing');
})

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})

app.listen('8080', () => {
    console.log('listneing');
})