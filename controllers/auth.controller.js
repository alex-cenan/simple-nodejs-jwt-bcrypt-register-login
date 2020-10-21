const User = require('../models/User');
const jwtCtrl = require('../controllers/jwt.controller');

const authCtrl = {};

authCtrl.signup = async(req, res) => {
    // Create user object
    const user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    });

    // Password encryption
    user.password = await user.encryptPassword(user.password);
    
    // Saveing user
    try{
        const result = await user.save();
        const jwtToken = jwtCtrl.generateToken(result);

        // Send token through the header
        return res.status(201).header('Authorization', 'Bearer: '+ jwtToken).send({"auth": true});
    }catch(err){
        return res.status(400).send({
            "error": true,
            "keyValue": err.keyValue,
            "keyPattern": err.keyPattern,
            "errors": err.errors
        });
    }
};

authCtrl.signin = async(req, res) => {
    let user = await User.findOne({email: req.body.email});

    if(!user) return res.status(400).send({
        "auth": false,
        "msg": "Usuario o contraseña incorrectos"
    });

    const validPassword = await user.checkPassword(req.body.password, user.password);
    if(!validPassword) return res.status(400).send({
        "auth": false,
        "msg": "Usuario o contraseña incorrectos"
    });

    const jwtToken = jwtCtrl.generateToken(user);

    // Send token through the header
    res.status(201).header('Authorization', 'Bearer: '+ jwtToken).send({"auth": true});
};

module.exports =  authCtrl;
