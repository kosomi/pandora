var app = angular.module('rtfm');

app.controller('loginController', function($scope, $location, EnvironmentService){

$scope.logMeIn = function(username){
	// alert(username);
	EnvironmentService.saveUsername(username);
	$location.path('/threads')
}

});