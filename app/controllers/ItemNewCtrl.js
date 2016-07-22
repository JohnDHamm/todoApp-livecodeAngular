"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location, AuthFactory) {
	$scope.newTask = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: "",
		uid: ""
	};

	$scope.addNewItem = function() {
		$scope.newTask.uid = AuthFactory.getUser();
		ItemStorage.postNewItem($scope.newTask)
		.then(function(response) {
			$location.url("/items/list");
		});
	};
});