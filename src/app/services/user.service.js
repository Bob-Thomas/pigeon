(function() {

	angular
		.module('pigeon.services.user', [])
		.factory('UserService', userService);
	
	userService.$inject = ['StorageService'];

	function userService(StorageService) {
	  var factory = {};

	  factory.isAuthenticated = function() {
	    if (StorageService.get('token')) {
	      return true;
	    } else {
	      return false;
	    }
	  }

	  return factory;
	}

})();