"use strict";

app.factory("cardStorage", function($q, $http, firebaseURL, AuthFactory){

	let getBaseCards = () => {
		var baseCards = [];

		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}activities.json`)
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

	let getUserCards = () => {
		let userActivities = [];
		let user = AuthFactory.getUser();

		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}.activities.json?orderBy="uid"&equalTo="${user.uid}"`)
			.success(function(cardObject){
				let cardCollection = cardObject;
				Object.keys(cardCollection).forEach(function(key){
					cardCollection[key].id=key;
					userActivities.push(cardCollection[key]);
					resolve(userActivities);
				})
				.err(function(error){
					reject(error);
				});
			});
		});
	};

	let addToUserCards = (cardToAdd) => {
		let user = AuthFactory.getUser();
		console.log("user", user);

		return $q(function(resolve, reject){
			$http.post(`${firebaseURL}activities.json`,
				JSON.stringify({
					cost: cardToAdd.cost,
					description: cardToAdd.description,
					location: cardToAdd.location,
					name: cardToAdd.name,
					public: false,
					time: cadToAdd.time,
					uid: user.uid
				})
				).success(
				function(objectFromFirebase){
					resolve(objectFromFirebase);
				}
			);
		});
	};

return {getBaseCards:getBaseCards, getUserCards:getUserCards, addToUserCards:addToUserCards};

});