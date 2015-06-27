angular.module('pigeon').factory('StorageService', function() {
  var factory = {};

  factory.get = function(key) {
    return window.localStorage[key];
  }

  factory.set = function(key, value) {
    window.localStorage[key] = value;
  }

  factory.remove = function(key) {
    window.localStorage.removeItem(key);
  }

  return factory;
});