const router = require('express').Router();
let Picture = require('../models/picture.model');


router.route('/add').post((req,res) => {
    const type = req.body.type;
    const src = req.body.src;
    const caption = req.body.caption
    const altText = req.body.altText

    const newPicture = new Picture({
        type,
        src,
        caption,
        altText
    });

    newPicture.save()
        .then(() => {res.send({message:"1"});
    })
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/get').get((req,res) => {
    const type = req.query.type
    Picture.find({type: type})
        .then(picture => res.json(picture))
        .catch(err => res.status(400).json('Error: '+ err));
});

  
module.exports = router;