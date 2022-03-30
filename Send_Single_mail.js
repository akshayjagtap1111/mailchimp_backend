
const User = require("../../src/model/user_model")
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());



const router = express.Router();




router.post("/user", async (req, res) => {


    try {
      var Email = req.body.email_from
      var password = ""

        
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: Email,
            pass: password
          }
        });


        var mailOptions = {
          from: Email,
          to: req.body.email_to,
          subject : req.body.subject,
          content : req.body.content,
         
          // attachments: [
          //   {
          //     filename: 'report.pdf',
          //     path: __dirname+'/../../local-files/report.pdf'
          //   }
          // ]
        };

        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            return res.status(201).json({
              status: 201,
              msg: "something went wrong please try again",
              err: err
            })
          } else {
            return res.status(200).json({
              status: 200,
              msg: "Mail was Sent Please Check Your Mail"
            })
          }
        });
      

    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  module.exports = router;