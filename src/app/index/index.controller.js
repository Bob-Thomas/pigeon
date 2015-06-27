angular.module('pigeon').controller('IndexController', function(UserService, $state) {
  if (UserService.isAuthenticated()) {
    $state.go('dashboard');
  } else {
    $state.go('signin');
  }
});