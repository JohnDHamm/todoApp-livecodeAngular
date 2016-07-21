"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage) {

	$scope.items = ItemStorage.getItemList();	

});