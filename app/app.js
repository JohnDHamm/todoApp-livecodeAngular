"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Items"}];
});

app.controller("TodoCtrl", function($scope){
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [
		{
     id: 0,
     task: "mow the lawn",
     isCompleted: true,
     dueDate: "12/5/17",
     assignedTo: "Greg",
     location: "Greg's mom's house",
     urgency: "low",
     dependencies: "sunshine, clippers, hat, water, headphones"
   },
   {
     id: 1,
     task: "grade quizzes",
     isCompleted: false,
     dueDate: "12/5/15",
     assignedTo: "Joe",
     location: "NSS",
     urgency: "high",
     dependencies: "wifi, tissues, vodka"
   },
   {
     id: 2,
     task: "take a nap",
     isCompleted: false,
     dueDate: "5/21/16",
     assignedTo: "Joe",
     location: "Joe's house",
     urgency: "medium",
     dependencies: "hammock, cat, pillow, blanket"
   }
	];

	$scope.allItems = function(){
		console.log("You clicked allItems");
		$scope.showListView = true;
	};

	$scope.newItem = function(){
		console.log("You clicked newItem");
		$scope.showListView = false;
	};

	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length;
		console.log("Added new item", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask = {};
	};

});