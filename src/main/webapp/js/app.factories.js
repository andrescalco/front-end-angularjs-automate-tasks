(function() {
	angular
		.module('app')
		.factory('CinqService',CinqService)

		function CinqService($resource) {
			var site_url = window.location.origin;
			return $resource(site_url+"/api/people/:id",{
				id : "@id"
			});
		
		}

})()