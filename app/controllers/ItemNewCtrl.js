"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage) {
	$scope.newTask = {};

	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = ItemStorage.getItemList().length;
		console.log("Added new item", $scope.newTask);
		ItemStorage.postNewItem($scope.newTask);
		$scope.newTask = {};
	};
});