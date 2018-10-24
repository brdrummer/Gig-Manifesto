const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




router.post('/', (req, res) => {
    pool.query(`INSERT INTO "profile" ("name", "email", "bands", "city")
  VALUES ($1, $2, $3, $4);`, [req.body.name, req.body.email, req.body.bands, req.body.city])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) =>{
            console.log('error', error); 
        });//end post query
  });
  
  router.get('/', (req, res) => {
    pool.query('SELECT * FROM "profile";')
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error with SQL get for "person"', error);
            res.sendStatus(500);
        })
  });

module.exports = router;