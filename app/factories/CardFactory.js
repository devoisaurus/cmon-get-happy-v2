"use strict";

app.factory("cardStorage", function($q, $http, firebaseURL, AuthFactory){

	let getBaseCards = () => {
		var baseCards = [];

		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}baseCards.json`)
			.success(function(cardObject){
				let cardCollection = cardObject;
				Object.keys(cardCollection).forEach(function(key){
					cardCollection[key].id=key;
					baseCards.push(cardCollection[key]);
				})
				resolve(baseCards);
			});
		});
	};

	let getUserCards = () => {
		var userActivities = [];
		let user = AuthFactory.getUser();

		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}baseCards.json?orderBy="uid"&equalTo="${user.uid}"`)
			.success(function(cardObject){
				let cardCollection = cardObject;
				Object.keys(cardCollection).forEach(function(key){
					cardCollection[key].id=key;
					userActivities.push(cardCollection[key]);
					resolve(userCards);
				});
			});
		});
	};

	let addToUserCards = (cardToAdd) => {
		let user = AuthFactory.getUser();
			console.log("user", user);

		return $q(function(resolve, reject){
			$http.post(`${firebaseURL}baseCards.json`,
				JSON.stringify({
					name: cardToAdd.name,
					description: cardToAdd.description,
					location: cardToAdd.location,
					cost: cardToAdd.cost,
					time: cardToAdd.time,
					uid: user.uid
				})
				)
		.success(function(objectfromFirebase){
				resolve(objectfromFirebase);
			}
		);
		});
	};

	let deleteCard = (cardToDelete) => {
		return $q(function(resolve, reject){
			$http.delete(`${firebaseURL}baseCards/${cardToDelete.id}.json`)
			.success(function(objectfromFirebase){
				resolve(objectfromFirebase);
			});
		});
	};


	let addNewCard = (newCard) => {
		let user = AuthFactory.getUser();

		return $q(function(resolve, reject){
			$http.post(`${firebaseURL}baseCards.json`,
				JSON.stringify({
					name: newCard.name,
					description: newCard.description,
					location: newCard.location,
					cost: newCard.cost,
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

	let getSingleCard = (selectedCard => {
		return $q(function(resolve, reject){
			console.log("selectedCard", selectedCard);

			$http
			.get(`${firebaseURL}baseCards/${selectedCard}.json`)
			.success(function(cardObject){
				console.log("selectedCard", selectedCard);

				resolve(cardObject);
			});
		});
	});

  let updateCard = (cardId, newCard) => {
  	let user = AuthFactory.getUser();

  	return $q(function(resolve, reject){
  		$http
  		.put(`${firebaseURL}baseCards/${cardId}.json`,
  			JSON.stringify({
					name: newCard.name,
					description: newCard.description,
					location: newCard.location,
					cost: newCard.cost,
					time: newCard.time,
					uid: user.uid  				
  			})
  			)
  		.success(function(objectfromFirebase){
  			resolve(objectfromFirebase);
  		});
  	})
  }

return {getBaseCards:getBaseCards, getUserCards:getUserCards, addToUserCards:addToUserCards, deleteCard:deleteCard, deleteCard:deleteCard, addNewCard:addNewCard, getSingleCard:getSingleCard, updateCard:updateCard};

});