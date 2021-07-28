//const pool = require('../middleware/connect');
const postgres = require('postgres');
const Postage = require('../models/model.js');
const db = require('../middleware/connect');

 exports.postVisite = (req, res) => {
    

     const emailCom = req.body.InEmail;
      db.query("SELECT * FROM ccial WHERE email = $1",[req.body.InEmail]) // recuperation de l'id du commercial

      .then(data => {const ccial_id = data.id;})
      .catch(error => {console.log('ERROR:', error);}
      );

      db.query("INSERT INTO dossier (date_insert, ccial_id)VALUES (NOW(), 468)", [NOW(), ccial_id])
      .then( () => {console.log("creation dossier ok")})
      .catch(error => {console.log('ERROR:', error);}   // creation d'un nouveau dossier avec la date du jour et id commercial
      );

      db.query("SELECT * FROM dossier WHERE id  = (SELECT max(id) FROM dossier)")
      .then(data => {const dossier_id = data.id})  // on recupere l'id du dossier creer 
      .catch(error => {console.log('ERROR:', error);}
      );

        const emailClient = req.body.InputEmail;
        db.query("SELECT id FROM acq WHERE email = $1",[req.body.InputEmail]) // recuperation de l'id du client

        .then(data => {const acq_id = data.id;})
        .catch(error => {console.log('ERROR:', error);}
        );



    const postVisite = new Postage({

        date_start : req.body.date_start,
        date_end : req.body.date_end,
        acq_id : acq_id,
        ccial_id: ccial_id,
        dossier_id: dossier_id,
        
    });

    db.query("INSERT INTO visite(date_start, date_end, acq_id, ccial_id, dossier_id) VALUES( $1, $2, $3, $4, $5)",
    [postVisite.date_start, postVisite.date_end, postVisite.acq_id, postVisite.ccial_id, postVisite.dossier_id])
    .then(data => {
        console.log('DATA:', data);
    })
    .catch(error => {
        console.log('ERROR:', error);
    });

};

exports.deleteAcq = (req, res) => {

    db.query('DELETE FROM acq WHERE email = $1', function (err,data,fiedls){
        if(!err){
            res.status(201).json({ message: "l'acquéreur à bien été supprimé"});
            
        }else{
            res.status(401).json({ message: " l'acquéreur n'a pas pu être supprimé"})
        }
    })
}