var express = require('express');
var app		= express();
var port 	= process.env.PORT || 8100;

//Ruta del cliente
app.use(express.static(__dirname + '/public'));

//Arranque del server
app.listen(port);

//Mensaje en consola para confirmar arranque
console.log('Listen on the port ' + port);

