var app = angular.module('myApp',[]);

app.controller('MainController', function($scope){
	$scope.toDoList = [];
	$scope.addToList = function(){
		$scope.toDoList.push($scope.newTask);
		$scope.newTask = '';

	}
});