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



// var mailContent = "<center><table class='body-wrap' style='text-align:center;width:86%;font-family:arial,sans-serif;border:12px solid rgba(126, 122, 122, 0.08);border-spacing:4px 20px;'>\
            //                         <tr><img src='https://s3.ap-south-1.amazonaws.com/lccbucket/logo.png' style='width:36%;'></tr>\
            //                         <tr>\
            //                             <td>\
            //                                 <center>\
            //                                     <table bgcolor='#FFFFFF' width='80%' border='0'>\
            //                                         <tbody>\
            //                                             <tr>\
            //                                                 <td style='font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5'>\
            //                                                     <h1 style='color:#575252;text-align:center;'>Welcome to Livechek</h1>\
            //                                                 </td>\
            //                                             </tr>\
            //                                             <tr style='text-align:center;color:#a2a2a2;font-size:14px;'>\
            //                                                 <td>\
            //                                                     <span>Your Agent has submitted your request to Company.</span>\
            //                                                 </td>\
            //                                             </tr>\
            //                                             <tr style='text-align:center;color:#a2a2a2;font-size:14px;height:45px;'>\
            //                                                 <td>\
            //                                                     <span>You will soon receive a SMS to start Inspection of your Car to be Insured.</span>\
            //                                                 </td>\
            //                                             </tr>\
            //                                         </tbody>\
            //                                     </table>\
            //                                 </center>\
            //                             </td>\
            //                         </tr>\
            //                     </table></center>";


            //             var smtpTransport = nodemailer.createTransport("SMTP", {
            //                 service: "Gmail",
            //                 auth: {
            //                     XOAuth2: {
            //                       user: "no_reply@livechek.com", // Your gmail address.
            //                                                             // Not @developer.gserviceaccount.com
            //                       clientId: "******",
            //                       clientSecret: "******",
            //                       refreshToken: "******"
            //                     }
            //                 }
            //             });

            // //             //instead of output.pdf dynamica file name will come in future

            //             var mailOptions = {
            //                 from: "meLivemedia@noreply.com",
            //                 // to: maillist,
            //                 to: "gabanishi45@gmail.com",
            //                 subject: "LiveChek",
            //                 generateTextFromHTML: true,
            //                 html: mailContent
            //                     // attachments: [{ 'filename': 'output.pdf', 'contents': data }]
            //             };

            //             smtpTransport.sendMail(mailOptions, function(error, response) {
            //                 if (error) {
            //                     console.log(error);
            //                 } else {
            //                     // sendSMS(mobileNumber, link);
            //                     res.send("success");
            //                 }
            //                 smtpTransport.close();
            //             })
            //         }
            //     });

