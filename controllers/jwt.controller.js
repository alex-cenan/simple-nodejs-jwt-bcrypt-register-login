const jwt = require('jsonwebtoken');

const jwtCtrl = {}

jwtCtrl.generateToken = function(user){
    return jwt.sign({
            id: user._id,
            name: user.name
        }, process.env.SECRET_KEY_JWT_API);
}

module.exports = jwtCtrl;