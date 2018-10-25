const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




router.post('/', (req, res) => {
    pool.query(`INSERT INTO "profile" ("name", "email", "bands", "city", "image_url", "user_profile_id")
  VALUES ($1, $2, $3, $4, $5, $6);`, [req.body.name, req.body.email, req.body.bands, req.body.city, req.body.image_url, req.body.user_profile_id])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) =>{
            console.log('error', error); 
        });//end post query
  });
  
  router.get('/:id', (req, res) => {

    console.log(req.user.id);
    pool.query(`SELECT * FROM "profile" LEFT JOIN "person" ON "profile"."user_profile_id"="person"."id" WHERE person.id=$1;`, [Number(req.user.id)])
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error with SQL get for "person"', error);
            res.sendStatus(500);
        })
  });

module.exports = router;
