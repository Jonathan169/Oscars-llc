var router = require('express').Router();
const nodeMailer = require('nodemailer');
const { google } =  require('googleapis')
const validator = require("email-validator")
require('dotenv').config()

const CLIENT_ID = '968541051308-egpgvvtor9bcektfdqt9ek6aa0ibib8r.apps.googleusercontent.com'
const CLIENT_SECRET = 'rx-H2Z4nfYh3QXLI-F3xngdm'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04xCQ-bpqrR9-CgYIARAAGAQSNwF-L9Irv4KJLG4FsCopdql8UNYNhpCJLhoYJsr86ka2_U1DW6RQP9CFyb9ElP0Z5K0yHA9ZKP8'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail(mailOptions) {
    try {
        const access_token = oAuth2Client.getAccessToken()
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                type:'OAuth2',
                user: 'oscarsllc@oscarsllc.com',
                clientId: CLIENT_ID,
                clientSecret : CLIENT_SECRET,
                refreshToken : REFRESH_TOKEN,
                accessToken : access_token,
            }
        })
        const results = await transporter.sendMail(mailOptions)
        return results

    } catch (error) {
        return error
    }
}



router.post("/formsubmit", function (req, res) {
    console.log(req.body)
    let mailOptions = {
        from: 'oscarsllc@oscarsllc.com',
        to: req.body.email ,
        subject: 'testing',
        text:"Thank you for reaching out!",
        html:`<h1>testing the email server please ignore</h1>
            <h3>Thank you for reaching out! someone will reach out and answer any questions you may have</h3>`,
    }
    sendMail(mailOptions).then(results => {
        console.log('email sent...', results) 
        mailOptions = {
            from: 'oscarchavez@oscarsllc.com',
            to: "oscarsllc@oscarsllc.com",
            subject: 'testing',
            text:"trying to see if this will work",
            html:`<h1>testing the email server please ignore</h1>
                  <h3>Name : ${req.body.name} </h3>
                  <h3>Phone Number: ${req.body.phone} </h3>
                  <h3>Address : ${req.body.city} </h3>
                  <h3>reason for reaching out : ${req.body.description} </h3>
                  <h3>how did you hear about us : ${req.body.us} </h3>`,
        }
        sendMail(mailOptions).then(results => {
            console.log('email sent...', results) 
            res.send(results)
        })
        .catch(error => {
            console.log(error)
            res.send(error)
        })
    })
    .catch(error => {
        console.log(error)
        res.send(error)
    })

})
module.exports= router