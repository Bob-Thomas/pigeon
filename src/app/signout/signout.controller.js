(function() {
	'use strict';

	angular
		.module('pigeon.controllers.signout', [])
		.controller('SignoutController',signoutController);
	
	signoutController.$inject = ['AuthService'];

	function signoutController(AuthService) {

		this.signout = function() {
			AuthService.signout();
		}
	}

})();