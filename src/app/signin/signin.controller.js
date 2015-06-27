angular.module('pigeon').controller('SigninController', function($scope, StorageService, $state) {
  $scope.attempt = function() {
    StorageService.set('token', 'foo');
    $state.go('dashboard');
  }
});