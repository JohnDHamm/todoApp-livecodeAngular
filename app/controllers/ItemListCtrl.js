"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, AuthFactory, $location) {
	if (AuthFactory.isAuthenticated() === true){

		console.log("true!" );
		ItemStorage.getItemList()
			.then(function(itemCollection) {
				$scope.items=itemCollection;
				$location.url("#/items/list");
			});
	} else {
		console.log("nope!" );
	}

	$scope.Remove = function(removeId){
		ItemStorage.deleteItem(removeId)
			.then(function(){
				ItemStorage.getItemList()
				.then (function(itemCollection){
					$scope.items=itemCollection;
				});
			});
	}

	$scope.CheckedTask = function(item){
		ItemStorage.checkedItem(item)
			.then(function(){
				ItemStorage.getItemList()
				.then (function(itemCollection){
					$scope.items=itemCollection;
				});
			});
	}
});