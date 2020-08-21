const express = require('express');
const PatientController = require("../controllers/patient");

const api = express.Router();

api.post("/solicitar-cita", PatientController.postDate);

module.exports = api;