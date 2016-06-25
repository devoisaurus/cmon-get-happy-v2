app.factory("cardStorage", function($q, $http){
	var activities = [];
	var getCardList = function(){
		return $q(function(resolve, reject){
			$http.get("https://cmon-get-happy.firebaseio.com/activities.json")
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
		})
	}
return {getCardList:getCardList}

})