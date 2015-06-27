(function () {
  'use strict';
  angular
    .module('pigeon') 
    .config(routing);

    routing.$inject = ['$locationProvider', '$stateProvider']
    
    function routing($locationProvider, $stateProvider) {
      $locationProvider.html5Mode(true);

      $stateProvider.state('index', {
        url: '/',
        controller: 'IndexController'
      }).state('signin', {
        url: '/signin',
        templateUrl: '/app/signin/signin.html',
        controller: 'SigninController',
        controllerAs: 'signinCtrl'
      }).state('dashboard', {
        url: '/dashboard',
        templateUrl: '/app/dashboard/dashboard.html'
      });
  }

})();