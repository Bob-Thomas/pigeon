(function() {
	'use strict'
	
	angular
		.module('pigeon.directives.signout', [])
		.directive('pgSignout', signOut);


		signOut.$inject = [];

		function signOut() {
			return {
				restrict:'E',
				bindToController:true,
				controller:'SignoutController',
				controllerAs: 'signoutCtrl',
				template: '<button ng-click="signoutCtrl.signout()">Sign out</button>' 
			}; 
		}

})();