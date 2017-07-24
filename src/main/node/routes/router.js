// variáveis
var ctrlIndex   = require('../controllers/index'),
	ctrlPeople = require('../controllers/People'),
	ctrlRequest = require('../controllers/request');

module.exports = function(apiRoutes){

	// raiz da api
    apiRoutes.get('/', ctrlIndex.index);

	// all people
    apiRoutes.get('/people', ctrlPeople.getAll);
	
	// people + id
    apiRoutes.get('/people/:id', ctrlPeople.getPeople);

	// 404
	apiRoutes.use(ctrlRequest.badRequest);

}