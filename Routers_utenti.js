var express = require('express');

//CREO IL ROUTER
var utenti = express.Router();

//LE ROTTE PARTONO DA /UTENTI


// PAGINA PRINCIPALE UTENTI   
utenti.get('/', function(req, res) {
  res.send('Lista degli utenti');
});

// DETTAGLIO DI UN UTENTE
utenti.get('/:id', function(req, res) {
  res.send('Detaglio dell utente con id :' + req.params.id);
});

utenti.post('/:id', function(req, res) {
  res.send('Detaglio dell utente con id :' + req.params.id);
});


module.exports = utenti;