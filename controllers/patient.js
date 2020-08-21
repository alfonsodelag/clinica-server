const bcrypt = require('bcrypt-nodejs');
const Patient = require("../models/patient");

function postDate(req, res) {

    const patientData = req.body;
    const patient = new Patient(patientData);
    patient.save((err, newPatient) => {
        if (err) {
            throw err
        }
        return res.json(newPatient)
    });
    console.log(patient);

}

module.exports = {
    postDate
};