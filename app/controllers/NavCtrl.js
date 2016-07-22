"use strict";

app.controller("NavCtrl", function($scope, AuthFactory){
	$scope.navItems = [
		{
			name: "Logout",
			url: "#/logout"
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
	};
	
});