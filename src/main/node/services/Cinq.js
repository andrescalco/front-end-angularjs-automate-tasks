var Message = require('../controllers/Message');
var request = require('request');

exports.get = GetCinqData;

function GetCinqData(req,res,next,id) {

	var url = "http://webservices.cinq.com.br:8000/people/";

	if (id) {
		url += id;
	} else {
		url = url
	}

	request(url, function(error, response, html){
		
		if(!error){
			
			var msg = new Message();
			
			msg.setCode('000');
			msg.setContent({ 
				"people": JSON.parse(response.body),
			});
			
			res.json( msg.buildMessage() );

		}

	});

}