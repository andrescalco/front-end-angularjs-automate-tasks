var People = function(){

	var list = [];

	function init() {
		
		var names    = ["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];
		var surnames = ["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"];
		var disclosableInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

		for (var ii = 0; ii <= 10; ii++) {

			var obj = {};
			
			obj.id = ii;
			obj.name = names[Math.floor(Math.random() * names.length)];
			obj.surname = surnames[Math.floor(Math.random() * surnames.length)];
			obj.disclosableInfo = disclosableInfo;
			list.push(obj)

		}
	}

	init();

	return {
		init : init,
		list : list
	}


}


exports.list = People().list;