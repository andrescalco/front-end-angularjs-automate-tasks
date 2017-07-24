var Message = require('./Message');

exports.auth = function(req,res,next) {

	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	if (!token) {
		
		var msg = new Message();
		
		msg.setCode('004');
		res.json( msg.buildMessage() );

	} else {
		next();
	}

}
