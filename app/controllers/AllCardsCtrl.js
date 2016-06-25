app.controller("AllCardsCtrl", function($scope, $http){
	$scope.activities = [];
	var getCards = function(){
		$http.get("https://cmon-get-happy.firebaseio.com/activities.json")
		.success(function(cardObject){
				var cardList = cardObject;
				Object.keys(cardList).forEach(function(key){
						cardList[key].id=key;
			$scope.activities.push(cardList[key]);
		})
	});
}

getCards();
	$scope.cardDelete = function(cardId){
		console.log("cardId", cardId);
		$http
			.delete(`https://cmon-get-happy.firebaseio.com/activities/${cardId}.json`)
			.success(function(response){
				console.log(response);
				$scope.activities=[];
				getCards();
			});
	};
});