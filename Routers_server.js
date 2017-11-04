var express = require('express');
var app = express();


//CARICO IL FILE UTENTI CHE E' UN ROUTER 
//E LO ASSEGNO ALLA VARIABILE UTENTI
var utenti = require('./Routers_utenti.js');

//CARICHIAMO IL ROUTER 
//E LO ASSEGNAMO ALLA ROTTA /UTENTI
app.use('/utenti', utenti);


app.listen(3001,function(req,res){
 console.log("Server in esecuzione");
})