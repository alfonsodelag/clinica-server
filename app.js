const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const { API_VERSION } = require('./config');

// Load Routings
const patientRoutes = require('./routers/patient');
const sendMail = require('./routers/sendmail');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// Configure Header HTTP

// Basic routes
app.use(`/api/${API_VERSION}`, patientRoutes);
app.use('/', sendMail);

module.exports = app;