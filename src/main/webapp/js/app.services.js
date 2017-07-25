(function() {
	angular
		.module('app')
		.factory('PeopleService',PeopleService)

		function PeopleService(CinqService) {
			var self = {
				data : [],
				getPeople : function() {
					CinqService.get('',function(response){
						self.data = response.content.people
					})
				}
			};

			return self;
		
		}

})()