const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST ROUTE ('/feedback/')
router.post('/', (req,res)=>{
    const newFeedback = req.body;
    console.log('Incoming feedback:', newFeedback);
    const queryText = `INSERT INTO "feedback" 
                        ("name", "feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4, $5);`;
    pool.querys(queryText, [newFeedback.name, newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then(()=> {
        console.log('POST successful')
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error with POST', error);
        res.sendStatus(500);
    });
});










module.exports = router;