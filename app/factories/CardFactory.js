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
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	let addToUserCards = () => {
		var userCards = [];
		let user = AuthFactory.getUser();
			console.log("user2", user2);

	return $q(function(resolve, reject){
		$http.get(`${firebaseURL}baseCards/{card.id}.json`)
		.success(function(cardObject){
			let cardCollection = cardObject;
			Object.keys(cardCollection).forEach(function(key){
				cardCollection[key].id=key;
				userCards.push(cardCollection[key]);
				resolve(userCards);
			})
			.error(function(error){
				reject(error);
			});
		});
	});
	};

	let getUserCards = () => {
		var userActivities = [];
		let user = AuthFactory.getUser();
		console.log("user3", user);

		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}baseCards.json`)
			.success(function(cardObject){
				let cardCollection = cardObject;
				Object.keys(cardCollection).forEach(function(key){
					cardCollection[key].id=key;
					userActivities.push(cardCollection[key]);
					resolve(userActivities);
				})
				.error(function(error){
					reject(error);
				});
			});
		});
	};


return {getBaseCards:getBaseCards, addToUserCards:addToUserCards, getUserCards:getUserCards};

});