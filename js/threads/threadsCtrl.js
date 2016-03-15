var app = angular.module('rtfm');

app.controller('threadsCtrl', function($scope, threadsRef  ){

$scope.threads = threadsRef.$asArray();

$scope.timez = Firebase.ServerValue.TIMESTAMP;

// $scope.threads.$loaded().then(function(threads) {
// 	console.log(threads);
// });

$scope.delete = function(thread){
	$scope.threads.$remove(thread);
}

$scope.createThread = function (username, title) {
	$scope.threads.$add({
		username: username,
		title: title,
		timez : $scope.timez
	});

	$scope.title = "";
};

});