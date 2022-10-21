const router = require('express').Router();
let NHIE = require('../models/nhie.model');


router.route('/add').post((req,res) => {
    const questions = req.body;
    console.log(questions);
    NHIE.insertMany(questions)
        .then(() => {res.send({message:"1"});
        })
        .catch(err => res.status(400).json('Error: '+ err));
    });

router.route('/get').get((req,res) => {
    const query = req.query
    NHIE.find(query)
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error: '+ err));
});


module.exports = router;