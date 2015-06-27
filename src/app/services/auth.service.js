(function() {
	'use strict';

	angular
		.module('pigeon.services.auth', [])
		.factory('AuthService', auth);


	auth.$inject = ['StorageService', '$state'];

	function auth(StorageService, $state) {
		var service = {};


		service.signin = function() {
			StorageService.set('token', 'foo');
    		$state.go('dashboard');
		}

		service.signout = function() {
	    	StorageService.remove('token');
	    	$state.go('signin');
		}

		return service;
	}
})();