var myApp = angular.module('myApp', []);

myApp.controller('RegistrationController', ['$scope', 
  function($scope) {

  $scope.register = function() {
    console.log('Click!');
    $scope.message = 'Welcome ' + $scope.user.firstname;
  };

}]);
        