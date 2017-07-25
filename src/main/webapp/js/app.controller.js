(function() {
	angular
		.module('app')
		.controller('MainController',MainController)

		function MainController(PeopleService) {
			
			var vm = this;
			
			vm.active;
			
			vm.load = function() {
				PeopleService.getPeople();	
			}
			
			vm.people =  function() {
				return PeopleService.data;
			}

		}

})()