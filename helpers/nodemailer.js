const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'yodji09@gmail.com',
        pass: 'Trafalgar99'
    }
})

const mailOptions = {
    from : 'yodji09@gmail.com',
    to : '',
    subject : 'Succes Create Account',
    text : ''
}