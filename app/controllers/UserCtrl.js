"use strict";

app.controller("UserCtrl", function($scope, ItemStorage, AuthFactory, $location, $q) {

	$scope.login = function(){
		AuthFactory.authWithProvider()
			.then(function(response){
				console.log("something" );
				$location.path("/items/list");
				$scope.$apply();
			});
	};
})
