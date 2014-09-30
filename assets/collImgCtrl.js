'use strict';

angular.module('blaine')
.controller('CollImgCtrl',['$scope', function ($scope) {
	$scope.collections = [];
	$scope.addColl = function (title) {
		console.log(title);
		$scope.collections.push(title);
	};
}]);