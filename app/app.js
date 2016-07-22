"use strict";

var app = angular.module("TodoApp", ['ngRoute'])
	.constant('FirebaseURL', "https://todoapp-angular-85937.firebaseio.com/");

 //for swapping partials - do not have to declare the controller in the markup
app.config(function($routeProvider, FBCreds){
	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain
	};
	firebase.initializeApp(authConfig);

	$routeProvider.
		when('/items/list', {
			templateUrl: "partials/item-list.html",
			controller: "ItemListCtrl"
		}).
		when('/items/new', {
			templateUrl: "partials/item-new.html",
			controller: "ItemNewCtrl"
		}).
		when('/items/details/:itemId', {
			templateUrl: "partials/item-details.html",
			controller: "ItemViewCtrl"
		}).
		when('/login', {
			templateUrl: "partials/login.html",
			controller: "UserCtrl"
		}).
		otherwise('/login'
			// templateUrl: "partials/login.html",
			// controller: "UserCtrl"
		);
});



// app.controller("TodoCtrl", function($scope){
// 	$scope.showListView = true;


// 	$scope.allItems = function(){
// 		console.log("You clicked allItems");
// 		$scope.showListView = true;
// 	};

// 	$scope.newItem = function(){
// 		console.log("You clicked newItem");
// 		$scope.showListView = false;
// 	};


// });