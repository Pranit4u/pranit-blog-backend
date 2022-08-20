const router = require('express').Router();
let Message = require('../models/message.model');


router.route('/send').post((req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const content = req.body.content;

    const newMessage = new Message({
        firstName,
        lastName,
        email,
        content
    });

    newMessage.save()
        .then(() => {res.send({message:"1"});
    })
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/get').get((req,res) => {
    Message.find({})
        .then(message => res.json(message))
        .catch(err => res.status(400).json('Error: '+ err));
});  

module.exports = router;