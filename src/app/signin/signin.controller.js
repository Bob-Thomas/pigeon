angular.module('pigeon').controller('SigninController', function($scope, StorageService, $state) {
  this.attempt = function() {
    StorageService.set('token', 'foo');
    $state.go('dashboard');
  }
});