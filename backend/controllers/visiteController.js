//const pool = require('../middleware/connect');
const postgres = require('postgres');
const Postage = require('../models/model.js');
const db = require('../middleware/connect');

exports.postVisite = (req, res) => {
    const postVisite = new Postage({

        date_start : req.body.date_start,
        date_end : req.body.date_end,
        acq_id : req.body.acq_id,
        ccial_id: req.body.ccial_id,
        dossier_id: req.body.dossier_id,
        
    });

    //postVisite.date_start, postVisite.date_end, postVisite.acq_id, postVisite.ccial_id, postVisite.dossier_id]
    console.log(postVisite);
    db.query("INSERT INTO visite(date_start, date_end, acq_id, ccial_id, dossier_id) VALUES( $1, $2, $3, $4, $5)",
    [postVisite.date_start, postVisite.date_end, postVisite.acq_id, postVisite.ccial_id, postVisite.dossier_id])
    .then(data => {
        console.log('DATA:', data);
    })
    .catch(error => {
        console.log('ERROR:', error);
    });
//    [postVisite.date_start, postVisite.date_end, postVisite.acq_id, postVisite.ccial_id, postVisite.dossier_id],(err,result) => { 
//         res.status(200).json({message:"Ca marche !"})
//     })
};