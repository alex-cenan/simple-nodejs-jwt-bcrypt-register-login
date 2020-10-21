const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

const { mongoose } = require('./database');
const auth = require('./routes/auth.routes');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', auth);

// Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port 3000');
})