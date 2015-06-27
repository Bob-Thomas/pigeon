angular.module('pigeon').config(function($locationProvider, $stateProvider) {
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
  }).state('signout', {
    url: '/signout',
    controller: 'SignoutController'
  });
});