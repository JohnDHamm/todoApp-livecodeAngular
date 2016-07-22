"use strict";

app.factory("AuthFactory", function(){
	let currentUserId = null;
	let provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    console.log("user logged in, dude", user.uid);
	    currentUserId = user.uid;
	    // loadSongsToDOM(currentUser);
	    // db.getSongs(templates.makeSongList, currentUser);
	  } else {
	    // No user is signed in.
	    console.log("user not logged in");
	    // currentUser = null;
	  }
	});

	var authWithProvider = function(){
		return firebase.auth().signInWithPopup(provider);
	};

	let isAuthenticated = function(){
		return (currentUserId) ? true : false;
	};

	let getUser = function(){
		return currentUserId;
	};

	return {authWithProvider, isAuthenticated, getUser};

});

