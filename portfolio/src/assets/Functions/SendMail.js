const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const nodemailer = require('nodemailer')
const ejs = require('ejs')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
})
console.log(process.env.GMAIL_EMAIL,process.env.GMAIL_PASSWORD)
const templatePath = path.join(__dirname, '../views/Leavemessage.ejs');

ejs.renderFile(templatePath, function(err, template){
    if(err){
        console.log('Error rendering ejs template:', err)
    }
    else{
        const mailOptions ={
            from: 'process.env.GMAIL_EMAIL',
            to: 'process.env.GMAIL_EMAIL',
            subject: 'MAIL FROM PORTFOLIO',
            html: template
        }
        
        transporter.sendMail(mailOptions, function(err,info){
            if(err){
                console.log('Error sending mail', err)
            }
            else{
                console.log('Message Sent successfully')
            }
        })
    }
})

