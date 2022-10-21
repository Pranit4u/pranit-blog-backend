const router = require('express').Router();
let NHIE = require('../models/nhie.model');


router.route('/add').post((req,res) => {
    const questions = req.body.questions;

    NHIE.insertMany(questions)
        .then(() => {res.send({message:"1"});
        })
        .catch(err => res.status(400).json('Error: '+ err));
    });

router.route('/get').get((req,res) => {
    const genre = req.query.genre
    NHIE.find({genre: genre})
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error: '+ err));
});


module.exports = router;