const postgres = require('postgres');

const Postage = function(visite){

    //this.InEmail = visite.InEmail;
    //this.InName = visite.InName;
    this.date_start = visite.date_start;
    this.date_end = visite.date_end;
    this.acq_id = visite.acq_id;
    this.ccial_id = visite.ccial_id;
    this.dossier_id = visite.dossier_id;
    
};

module.exports = Postage;