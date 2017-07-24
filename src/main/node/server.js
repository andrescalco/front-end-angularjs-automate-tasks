// variáveis
var express = require('express'),
	app = express(),
	apiRoutes = express.Router(),
	port = 8080,
	opn = require('opn'),
	config = require('./config/config')(app),
	router = require('./routes/router')(apiRoutes);
	routes = require('./routes/routes')(app),
	ctrlRequest = require('./controllers/Request');

// rotas da api
app.use('/api',apiRoutes);

//serve static
app.use('/webapp', express.static('../webapp/'));

// 404
app.use(ctrlRequest.badRequest);

// inicia a aplicação
app.listen(port,function() {
	console.log('Server running on: http://localhost:' + port + '/webapp')
	opn('http://localhost:' + port + '/webapp')
});