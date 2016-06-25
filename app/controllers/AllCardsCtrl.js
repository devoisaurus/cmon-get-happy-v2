app.controller("AllCardsCtrl", function($scope, $http, $location, cardStorage){
	$scope.activities = [];

	cardStorage.getCardList().then(function(cardList){
		console.log("cardList from promise", cardList);
		$scope.activities = cardList;
	})


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