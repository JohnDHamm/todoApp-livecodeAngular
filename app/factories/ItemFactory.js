"use strict";

app.factory("ItemStorage", function(FirebaseURL, $q, $http, AuthFactory){

	let getItemList = function() {
		let items = [];
		return $q(function(resolve, reject) {
			console.log("user id?", AuthFactory.getUser());
			$http.get(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${AuthFactory.getUser()}"`)
			.success(function(itemsObject) {
				let itemCollection = itemsObject;
				//create array from object and loop thru keys - saving fb key for each item inside the obj as an id property
				Object.keys(itemCollection).forEach(function(key){
					itemCollection[key].id=key;
					items.push(itemCollection[key]);
				});
				resolve (items);
				console.log("items:", items);
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

	let checkedItem = function(item) { 
		console.log("item checked", item);
		// let newItem = item;
		let itemUrl = FirebaseURL + "items/" + item.id + ".json";
		// let newItem.isCompleted = item.isCompleted ? false : true;
		console.log("itemUrl", itemUrl);
		let testvar = JSON.stringify(item);
		console.log(testvar);
		return $q(function(resolve, reject){
			$http.put(itemUrl, item)
			.success(function(Obj){
				resolve(Obj);
			})
			.error(function(error){
				reject(error);
			}); 
		});

		console.log("item.isCompleted", itemStatus);
	};

	return {getItemList, postNewItem, deleteItem, checkedItem};
	
});
