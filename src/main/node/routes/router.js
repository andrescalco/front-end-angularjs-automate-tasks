// variáveis
var ctrlIndex   = require('../controllers/Index'),
	ctrlPeople = require('../controllers/People'),
	ctrlRequest = require('../controllers/Request');

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