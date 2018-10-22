const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "gigs";')
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error with SQL get for "gigs"', error);
            res.sendStatus(500);
        })
});


/**
 * Add an item for the logged in user to the shelf
//  */
// router.post('/', (req, res) => {
//     pool.query(`INSERT INTO "item" ("description","image_url","person_id")
//  VALUES ($1, $2, $3);`, [req.body.description, req.body.image_url, req.body.person_id])
//         .then(() => {
//             res.sendStatus(200);
//         }).catch((error) =>{
//             console.log('error', error); 
//         });//end post query
// });//end router post
// //test2


// /**
//  * Delete an item if it's something the logged in user added
//  */
// router.delete('/:id', (req, res) => {
//     let id = req.params.id;
//     pool.query(`DELETE FROM "item" WHERE "id"=$1`, [id])
//     .then(() => {
//         res.sendStatus(200);
//     }).catch(error => {
//         console.log('error deleting', error);
//         res.sendStatus(500);
//     });
// });


// /**
//  * Update an item if it's something the logged in user added
//  */
// router.put('/:id', (req, res) => {
//     let id = req.params.id;
//     let body = req.body;
//     pool.query(`UPDATE "item" SET "description"=$1, "image_url"=$2 WHERE "id"=$3;`, [body.description, body.image_url, id])
//     .then(() => {
//         res.sendStatus(200);
//     }).catch(error => {
//         console.log('error with post', error);
//         res.sendStatus(500);
//     });
// });


// /**
//  * Return all users along with the total number of items 
//  * they have added to the shelf
//  */
// router.get('/count', (req, res) => {
//     pool.query(`
//         SELECT
//             "person"."id",
//             "person"."username",
//             COUNT("item"."id") AS "count"
//         FROM
//             "person"
//             LEFT OUTER JOIN "item"
//             ON "person"."id" = "item"."person_id"
//         GROUP BY
//             "person"."id"
//         ;
//     `).then(results => {
//         console.log(results.rows);
//         res.send(results.rows);
//     }).catch(error => {
//         console.log('Error : ', error);
//     });
// });


// /**
//  * Return a specific item by id
//  */
// router.get('/:id', (req, res) => {

// });

module.exports = router;