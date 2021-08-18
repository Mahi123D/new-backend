const mongoose = require("mongoose");

var profileModel = new mongoose.Schema({
    firstname : String,
    email: String,
    phone: String
});

mongoose.model('profile', profileModel);