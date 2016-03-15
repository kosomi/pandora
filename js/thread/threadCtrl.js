var app = angular.module('rtfm');

app.controller('threadCtrl', function($scope, threadRef, commentsRef, threadService){

var thread = threadService.getThreads().$asObject();

thread.$bindTo($scope, 'thread');

$scope.comments = commentsRef.$asArray();

$scope.delete = function(comment){
	$scope.comments.$remove(comment);
}

$scope.createComment = function(username, comment) {
	
	$scope.comments.$add({
		username: username,
		text: comment
	})

	$scope.newCommentText = '';
}

})