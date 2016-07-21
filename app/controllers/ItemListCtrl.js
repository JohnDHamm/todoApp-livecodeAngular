"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage) {
	ItemStorage.getItemList()
		.then(function(itemCollection) {
			$scope.items=itemCollection;
		});
});