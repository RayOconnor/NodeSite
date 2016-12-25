var app = angular.module('myApp', []);

app.directive('navbar', function() {

  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: '/navigation.html'
  };
});