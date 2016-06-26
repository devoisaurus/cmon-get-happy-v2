app.factory("cardStorage", function($q, $http, firebaseURL, AuthFactory){

	var getCardList = function(){
		var activities = [];
		let user = AuthFactory.getUser();
		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}activities.json?orderBy="uid"&equalTo="${user.uid}"`)
			.success(function(cardObject){
				var cardList = cardObject;
				Object.keys(cardList).forEach(function(key){
					cardList[key].id=key;
					activities.push(cardList[key]);
				})
				resolve(activities);
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	var deleteCard = function(cardId){
		return $q(function(resolve, reject){
			$http
			.delete(firebaseURL + "activities/" + cardId + ".json")
			.success(function(objectFromFirebase){
				resolve(objectFromFirebase);
			});
		});
	};

	var postNewCard = function(newCard){
		let user = AuthFactory.getUser();
		return $q(function(resolve, reject){
			$http.post(
				firebaseURL + "activites.json",
				JSON.stringify({
					cost: newCard.cost,
					description: newCard.description,
					location: newCard.description,
					name: newCard.name,
					public: false,
					time: newCard.time,
					uid: user.uid
				})
			)
			.success(
				function(objectFromFirebase){
					resolve(objectFromFirebase);
				}
			);
		});
	};

return {getCardList:getCardList, deleteCard:deleteCard, postNewCard:postNewCard}

})