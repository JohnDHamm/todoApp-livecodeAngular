"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage) {
	ItemStorage.getItemList()
		.then(function(itemCollection) {
			$scope.items=itemCollection;
		});
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