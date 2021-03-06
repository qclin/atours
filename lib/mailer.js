var nodemailer = require('nodemailer');
var config = require('./config.json');


const smtpConfig = {
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
        user: config.AWS_MAIL.SMTP_USER,
        pass: config.AWS_MAIL.SMTP_PASS
    }
};

const transport = nodemailer.createTransport(smtpConfig);



module.exports = {
  sayHello : function(req, res){
    // the amazon one
    var message = `${req.body.message} \n\n\nFrom: ${req.body.name}\nEmail: ${req.body.email}`
    var mailOption = {
      from: `"Global Contemporary Art Tours Group, Inc." <${config.MAIL.INFO}>`,
      to: config.MAIL.ADDRESS, // change this later to config.MAIL.INFO
      subject: `Newsletter ${req.body.subject}`,
      text: message
    }

    transport.sendMail(mailOption, function(error, info){
      if(error){
        res.json({hey: 'error'});
      }else{
        sendConfirmation(req.body.email)
        res.send(200)
      };
    });
  }
}

function sendConfirmation(email){
    var message = `Test test this is the first Newsletter`
    var mailOption = {
      from: `"Global Contemporary Art Tours Group, Inc." <${config.MAIL.INFO}>`,
      to: email,
      subject: `Global Contemporary Art Tours Group, Inc.`,
      text: message
    }

    transport.sendMail(mailOption, function(error, info){
      if(error){
        console.log(error);
      }else{
        console.log('message sent: '+ info.response)
      };
    });
}
