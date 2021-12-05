const router = require('express').Router();
const nodemailer = require('nodemailer');
const path = require('path');
const { getMaxListeners } = require('process');
const { Item, User } = require("../../models");
const tokenAuth = require('../../middleware/tokenAuth');


router.get('/:id', tokenAuth, (req, res) => {    
    console.log("------contact--" + res.body.contact);
    Item.findAll({
        where: {
            id: req.params.id
        },
        include: [User]
    }).then(newEmail => {
        const title = newEmail[0].title;
        const user = newEmail[0].User.firstName;
        const email = newEmail[0].User.email;
        res.json(newEmail)

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'beebycontact@gmail.com',
                pass: 'Project3'
            }
        });
        let mailOptions = {
            from: 'beebycontact@gmail.com',
            to: 'test@gmail.com',
            subject: `Someone is interested in your item, ${user}!`,
            text: `There is someone interested in your item: ${title}. Please contact them at the following email address `
            // ${contact}.`
        };
        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log('email sent')
            }
            // }).catch(err => {
            //     console.log(err);
            //     res.status(500).json({ message: "an error occured", err: err })
        })

    });
});



module.exports = router;