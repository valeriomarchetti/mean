var express = require('express');

/* CREO UN' APPLICAZIONE EXPRESS */
var app = express();

/* ROUTING */
app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/movies/:id', function (req, res) {
  
  var id_richiesto = req.params.id;
  res.status(403).send('Hai cercato il film con id:' + id_richiesto);

});
/* START DEL SERVER */
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000');
});