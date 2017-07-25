'use strict';
const nodemailer = require('nodemailer');


var smtpTransport = require('nodemailer-smtp-transport');
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({ 
	service: 'gmail',
    host: 'smtpout.secureserver.net', 
    port: 465, 
    auth: { user: 'nishi.livemedia@gmail.com', pass:'ggg' },
    secure: true
});

// setup email data with unicode symbols
var mailOptions = {
    from: '"Nishi Gaba 👻" <nishi.livemedia@gmail.com>', // sender address
    to: 'gabanishi45@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
