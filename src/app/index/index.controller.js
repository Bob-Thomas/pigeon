(function() {
	'use strict';

	angular
		.module('pigeon.controllers.index', [])
		.controller('IndexController', indexController);

	indexController.$inject = ['$state', 'UserService'];

	function indexController($state, UserService) {
	  if (UserService.isAuthenticated()) {
	    $state.go('dashboard');
	  } else {
	    $state.go('signin');
	  }
	};
	
})();