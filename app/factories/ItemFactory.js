"use strict";

app.factory("ItemStorage", function(FirebaseURL, $q, $http){

	let getItemList = function() {
		let items = [];
		return $q(function(resolve, reject) {
			$http.get(`${FirebaseURL}/items.json`)
			.success(function(itemsObject) {
				let itemCollection = itemsObject;
				//create array from object and loop thru keys - saving fb key for each item inside the obj as an id property
				Object.keys(itemCollection).forEach(function(key){
					itemCollection[key].id=key;
					items.push(itemCollection[key]);
				});
				resolve (items);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	let postNewItem = function(newItem){
		// items.push(newItem);
		return $q(function(resolve, reject){
			$http.post(`${FirebaseURL}/items.json`,
				JSON.stringify(newItem))
			.success(function(ObjFromFirebase){
				resolve(ObjFromFirebase);
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	let deleteItem = function(removeId){
		let itemUrl = FirebaseURL + "/items/" + removeId + ".json";
		return $q(function(resolve, reject){
			$http.delete(itemUrl)
				.success(function(){
					resolve();
				});
		});
	}

	return {getItemList, postNewItem, deleteItem};
	
});
