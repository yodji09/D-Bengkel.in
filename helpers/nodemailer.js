const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
      user: "mobadc2017@gmail.com", // replace with your Mailtrap credentials
      pass: "Trafalgar9"
    }
  });

const mailOptions = {
    from : 'mobadc2017@gmail.com',
    to : '',
    subject : '',
    text : '',
    html : "",
    attachment : [
        { filename : '', path : ''}
    ]
}

module.exports = {transporter, mailOptions}