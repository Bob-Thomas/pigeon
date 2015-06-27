angular.module('pigeon').controller('SignoutController', function(StorageService, $state) {
  StorageService.remove('token');
  $state.go('signin');
});