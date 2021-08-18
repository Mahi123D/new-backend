'use strict';
var mongoose = require('mongoose');
var profileModel = mongoose.model('profile');

var saveProfile = (context, res) =>{
    var body = context.body;
console.log("body",body)
    var profile = new profileModel();

    profile.firstname = body.firstname;
    profile.email = body.email;
    profile.phone = body.phone;


    profile.save((err, docs) => {
        res.json(docs);
    })

}

var getProfile = (context, res)=>{
console.log("context",context.id);
    profileModel.find({_id: context.id}, (err, docs) => {
        res.json(docs);
    })
}

exports.saveProfile = saveProfile;
exports.getProfile = getProfile;