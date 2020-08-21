// const { Router } = require('express');
const nodemailer = require('nodemailer');
const express = require('express');
// const router = Router();
const sendMail = express.Router();

sendMail.post('/send-email', async (req, res) => {

    const { name, email, phone, message } = req.body;

    contentHTML =
        `
    <h1>User Information</h1>
    <ul>
        <li>UseName: ${name}</li>
        <li>Use E-mail: ${email}</li>
        <li>Phone: ${phone}</li>
    </ul>
    <p>${message}</p>`;

    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.email',
        port: 587,
        auth: {
            user: 'alfonsodelag1@gmail.com',
            pass: 'Alcazar1!'
        }
    });

    const info = await smtpTransport.sendMail({
        from: 'alfonsodelag1@gmail.com',
        to: 'alfonsodelag1@gmail.com',
        subject: 'Website Contact Form',
        html: contentHTML
    }).catch(e => {
        console.log(e)
    })

    res.redirect('/success.html');
})

module.exports = sendMail;