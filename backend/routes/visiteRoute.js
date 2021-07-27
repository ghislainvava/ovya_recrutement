const express = require('express');
const visiteCtrl = require('../controllers/visiteController');
const router = express.Router();
     
router.post("/visite", visiteCtrl.postVisite);


module.exports = router;