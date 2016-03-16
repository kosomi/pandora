var app = angular.module('rtfm');

app.controller('threadsCtrl', function($scope, Firebase, $filter, threadsRef){

$scope.threads = threadsRef.$asArray();

$scope.Date = $scope.todaydate;  

$scope.todaydate = $filter("date")(Date.now(), 'yyyy-MM-dd');
 
$scope.totalCups = 0;  
$scope.morningHour = 0;
$scope.noonHour = 0;
$scope.nightHour = 0;
$scope.morningMin = 0;
$scope.noonMin = 0;
$scope.nightMin = 0;
$scope.comment = "";

// $scope.threads.$loaded().then(function(threads) {
// 	console.log(threads);
// }); 

$scope.delete = function(thread){
	$scope.threads.$remove(thread);
}

$scope.recordCups = function(morningHour, noonHour, nightHour, morningMin, noonMin, nightMin, comment){



	$scope.totalCups = $scope.morningHour*60 + $scope.noonHour*60 + $scope.nightHour*60 + 
					   $scope.morningMin*1 + $scope.noonMin*1 +$scope.nightMin*1  ;


	if($scope.totalCups < 1){
		return false;
	}

 	function findTotal(){
 		return parseInt($scope.totalCups/60)
 	};
	
	$scope.totalHour = findTotal();

	$scope.totalMin = $scope.totalCups%60 ;	   

 
	$scope.threads.$add({
		morningHour: morningHour,
		noonHour: noonHour,
		nightHour: nightHour,
		morningMin: morningMin,
		noonMin: noonMin,
		nightMin: nightMin,
		totalHour: $scope.totalHour, 
		totalMin: $scope.totalMin, 
		date : $scope.date,
		comment: $scope.comment
	})
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