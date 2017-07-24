var People  = require('../model/People');
var Message = require('./Message');

exports.getAll = function(req,res,next) {
	var msg = new Message();

	msg.setCode('000');
	msg.setContent({ 
		"people": People.list,
	});

	res.json( msg.buildMessage() );
}

exports.getPeople = function(req,res,next) {
	
	var params = req.params;

	if ( /\d/.test( params['id'] ) ) {
		
		var response = People.list.filter( e => e.id == params['id'] )
		var msg = new Message();

		msg.setCode('000');
		msg.setContent(response[0]);

		res.json( msg.buildMessage() );

	} else {
		next();
	}

}