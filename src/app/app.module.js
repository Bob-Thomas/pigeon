(function() {
	angular.module('pigeon', [
	  //services
	  'pigeon.services.storage',
	  'pigeon.services.auth',
	  'pigeon.services.user',

	  //controlers
	  'pigeon.controllers.signin',
	  'pigeon.controllers.signout',
	  'pigeon.controllers.index',

	  //directives
	  'pigeon.directives.signout',

	  'ui.router'
	]);
})();