var Message = require('./Message');

exports.segredo = function(req,res,next) {

	var msg = new Message();
	
	msg.setCode('000');
	msg.setContent({ segredo:42 });

	res.json( msg.buildMessage() );

}

exports.novoSegredo = function(req,res,next) {

	console.log(req.body.segredo);

	var msg = new Message();
	
	msg.setCode('000');
	msg.setMessage('Segredo salvo com sucesso!');

	res.json( msg.buildMessage() );

}