"use strict";

app.controller("UserCtrl", function($scope, ItemStorage, AuthFactory, $location, $q) {

	$scope.login = function(){
		AuthFactory.authWithProvider();
	};

	$scope.logout = function(){
		AuthFactory.logout();
	};
})
