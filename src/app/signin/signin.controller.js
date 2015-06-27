(function() {
	'use strict';
	
	angular
		.module('pigeon.controllers.signin', [])
		.controller('SigninController',SigninController);

	SigninController.$inject = ['$scope', '$state', 'AuthService'];

	function SigninController($scope, $state, AuthService) {
	  this.signin = function() {
	  	AuthService.signin();
	  }
	}
})();