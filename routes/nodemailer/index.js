var router = require('express').Router();
const nodeMailer = require('nodemailer');
require('dotenv').config()

var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jon.hernandez169@gmail.com',
        pass:process.env.password
    }
})

router.post("/formsubmit", function (req, res) {
    console.log(req.body)
    let mailOptions = {
        from: 'jon.hernandez169@gmail.com',
        to: req.body.email,
        subject: 'testing',
        text:"trying to see if this will work",
    }
    // transporter.sendMail(mailOptions, function (err,data) {
    //     err? res.send(err): res.send(data)
    // })
    
})
module.exports= router