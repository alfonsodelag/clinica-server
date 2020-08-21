const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    consultationMotive: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Patient", PatientSchema);
