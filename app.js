const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

var cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyparser.json());



var connection = require('./model/connection');

var Port = process.env.PORT || 3000;

app.listen(Port, () => console.log("port is running on 3000"));

app.use('/profile', require('./server/api/profile'));
