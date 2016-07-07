"use strict";

app.factory("cardStorage", function($q, $http, firebaseURL, AuthFactory){

	let getBaseCards = () => {
		var baseCards = [];
		let user = AuthFactory.getUser();
		console.log("user", user);

		return $q(function(resolve, reject){
			$http.get(`https://cmon-get-happy.firebaseio.com/baseCards.json`)
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

	let addToUserCards = (userCard) => {
		let user = AuthFactory.getUser();
			console.log("user2", user);

		return $q(function(resolve, reject){
			$http.post(`https://cmon-get-happy.firebaseio.com/baseCards.json`,
				JSON.stringify({
					cost: "",
					description: "",
					location: "",
					name: "",
					time: "",
					uid: ""
				}))
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
			$http.get(`${firebaseURL}baseCards.json?orderBy="uid"&equalTo="${user.uid}"`)
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

	let postNewCard = (newCard) => {
		let user = AuthFactory.getUser();
		return $q(function(resolve, reject){
			$http.post(`https://cmon-get-happy.firebaseio.com/baseCards.json`,
				JSON.stringify({
					cost: newCard.cost,
					description: newCard.description,
					location: newCard.location,
					name: newCard.name,
					time: newCard.time,
					uid: user.uid
				})
				)
			.success(
				function(objectfromFirebase){
					resolve(objectfromFirebase);
				}
				);
	});
	};

	let deleteCard = (cardToDelete) => {
		return $q(function(resolve, reject){
			$http.
			delete(`${firebaseURL}baseCards/${cardToDelete.id}.json`)
			.success(function(objectfromFirebase){
				resolve(objectfromFirebase);
			});
		});
	};


return {getBaseCards:getBaseCards, addToUserCards:addToUserCards, getUserCards:getUserCards, postNewCard:postNewCard, deleteCard:deleteCard};

});