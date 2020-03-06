'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');


//to make it work you need gmail account
 const gmailEmail = functions.config().gmail.login;
 const gmailPassword = functions.config().gmail.pass;

//creating function for sending emails
var goMail = function (message) {

  
    //transporter is a way to send your emails
    let transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        // port: 465,
        service:'gmail',
        //secure: false,
        auth: {
            user: 'emiklad1993@gmail.com',
            pass: "Emiklad24"
        },
        // tls: {
        //     rejectUnauthorized:false
        // }
    });
    const mailOptions = {
        from: 'emiklad1993@gmail.com',
        to: 'emma.nnajichi@gmail.com',
        subject: message.subject,
        text: 'I hope this message gets through!',
        html: `<p>You have a new Contact request</p>
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${message.fullname}</li>
        <li>Email: ${message.email}</li>
        <li>Phone: ${message.phonenumber}</li>
        </ul>
        <h3>Mesage</h3>
        <p>${message.message}</p>`
    }
    //this is callback function to return status to firebase console
    const getDeliveryStatus = function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    };

    
    transporter.sendMail(mailOptions, getDeliveryStatus);
};

//.createUser is watches for changes in database
exports.createUser = functions.firestore
    .document('contact-users/{userId}')
    .onCreate((snap, context) => {
        const newValue = snap.data();

        //here we send new data using function for sending emails
        goMail(newValue);
    });
