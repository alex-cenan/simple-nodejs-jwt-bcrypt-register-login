const mongoose = require('mongoose');
const URI = 'mongodb://localhost/simple-jwt-register-login';

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true})
    .then(res => console.log('DB is connected.'))
    .catch(err => console.log(err));

module.export = mongoose;