"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, AuthFactory) {
	if (AuthFactory.isAuthenticated() === true){
		console.log("true!" );
	ItemStorage.getItemList()
		.then(function(itemCollection) {
			$scope.items=itemCollection;
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
});