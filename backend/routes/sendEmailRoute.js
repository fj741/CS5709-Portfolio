/**
 * Installed nodemailer to send emails
 */

const nodemailer = require('nodemailer');
const dotenv = require("dotenv");

dotenv.config()

//takes the email and password from the .env file 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports = transporter;