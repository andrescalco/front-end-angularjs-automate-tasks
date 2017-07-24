var Cinq = require('../services/Cinq')

exports.getAll = function(req,res,next) {
	Cinq.get(req,res,next);
}

exports.getPeople = function(req,res,next) {
	
	var params = req.params;

	if ( /\d/.test( params['id'] ) ) {
		Cinq.get(req,res,next,params['id']);
	} else {
		next();
	}

}