var app = angular.module('myApp', []);
app.controller('appCtrl', ['$scope',function($scope){
	$scope.data = result.marks; // JSON object from data.js
}]);
