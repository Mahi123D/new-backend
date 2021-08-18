
var lib = require('../../lib/profile')

var saveProfile = (req, res) =>{
    var context = {
        req: req,
        body: req.body
    }
    lib.saveProfile(context, res);
}

var getProfile = (req, res) => {
    var context = {
        req: req,
        id: req.params.id
    }
    lib.getProfile(context, res);
}

exports.saveProfile = saveProfile;
exports.getProfile = getProfile;
