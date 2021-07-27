const express = require('express');
const visiteRoute = require('./routes/visiteRoute')



const originAccept = ['http://localhost:8080','http://localhost:8081','http://localhost:8082', 'https://reseau-vue-ghis.web.app'];


const app = express(); // cree l'Application


app.use((req, res, next) => { //gestion du CORS
    if (req.headers['origin'] && originAccept.includes(req.headers['origin'])){  //condition pour filtrer les origines
      res.setHeader('Access-Control-Allow-Origin', req.headers['origin']);
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'null');
    }
   
    if (req.method === 'OPTIONS'){
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // type de header acceptés
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // méthodes à utiliser
      return res.end();
    }
    next();
});

app.use(express.urlencoded({ extended: true}))

app.use(express.json());
app.use('/api', visiteRoute)





module.exports = app;