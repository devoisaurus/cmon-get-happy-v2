"use strict";

app.factory("cardStorage", function($q, $http, firebaseURL, AuthFactory){

	let getBaseCards = () => {
		var baseCards = [];
		let user = AuthFactory.getUser();
		console.log("user", user);

		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}baseCards.json`)
			.success(function(cardObject){
				let cardCollection = cardObject;
				Object.keys(cardCollection).forEach(function(key){
					cardCollection[key].id=key;
					baseCards.push(cardCollection[key]);
				})
				resolve(baseCards);
				console.log("baseCards", baseCards);
			});
		});
	};

	let addToUserCards = () => {
		var userCards = [];
		let user = AuthFactory.getUser();
			console.log("user2", user);

	return $q(function(resolve, reject){
		$http.post(`${firebaseURL}baseCards/users.json`)
		.success(function(cardObject){
			let cardCollection = cardObject;
			Object.keys(cardCollection).forEach(function(key){
				cardCollection[key].id=key;
				userCards.push(cardCollection[key]);
				resolve(userCards);
			});
		});
	});
	};

	let getUserCards = () => {
		var userActivities = [];
		let user = AuthFactory.getUser();
		console.log("user3", user);

		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}baseCards.users.json?orderBy="uid"&equalTo="${user.uid}"`)
			.success(function(cardObject){
				let cardCollection = cardObject;
				Object.keys(cardCollection).forEach(function(key){
					cardCollection[key].id=key;
					userActivities.push(cardCollection[key]);
					resolve(userActivities);

				});
			});
		});
	};


return {getBaseCards:getBaseCards, addToUserCards:addToUserCards, getUserCards:getUserCards};

});