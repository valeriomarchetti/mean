var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

//CARICO IL FILE UTENTI CHE E' UN ROUTER 
//E LO ASSEGNO ALLA VARIABILE UTENTI
var utenti = require('./Routers_utenti.js');

//CARICHIAMO IL ROUTER 
//E LO ASSEGNAMO ALLA ROTTA /UTENTI
app.use('/utenti', utenti);


app.listen(process.env.PORT || 3000, function () {
 console.log("Server in esecuzione");
})