const mongoose  = require("mongoose");


mongoose.connect('mongodb://localhost:27017/profileData',{ useUnifiedTopology: true }, { useNewUrlParser: true });

const profile = require("./index");