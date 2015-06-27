angular.module('pigeon').factory('UserService', function(StorageService) {
  var factory = {};

  factory.isAuthenticated = function() {
    if (StorageService.get('token')) {
      return true;
    } else {
      return false;
    }
  }

  return factory;
});