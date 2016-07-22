"use strict";

app.controller("NavCtrl", function($scope, AuthFactory, $location){
	$scope.navItems = [
		{
			name: "Logout",
			// url: "#/logout",
			logout: true
		}, 
		{
			name: "All Items",
			url: "#/items/list"
		}, 
		{
			name: "New Items",
			url: "#/items/new"
		}
	];

		$scope.logout = function(){
		AuthFactory.logout();
		$location.url("/login");
		// $scope.$apply();

	};

});