var express = require('express');

//CREO IL ROUTER
var utenti = express.Router();

//LE ROTTE PARTONO DA /UTENTI

var bodyParser = require('body-parser');
utenti.use(bodyParser.json());

// PAGINA PRINCIPALE UTENTI   
utenti.get('/', function(req, res) {
  res.send('Lista degli utenti');
});

// DETTAGLIO DI UN UTENTE
utenti.get('/:id', function(req, res) {
  res.send('Detaglio dell utente con id :' + req.params.id);
});

utenti.post('/:id', function(req, res) {
  var body = req.body;
  //res.send('Detaglio dell utente con id :' + req.params.id + ' | var test: ' + body.test);
  body.server = "true";
  res.json(body);
});


module.exports = utenti;