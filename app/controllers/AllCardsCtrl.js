app.controller("AllCardsCtrl", function($scope, $http, $location, cardStorage){
	$scope.activities = [];

	cardStorage.getCardList().then(function(cardList){
		console.log("cardList from promise", cardList);
		$scope.activities = cardList;
	})


	$scope.cardDelete = function(cardId){
		console.log("cardId", cardId);
		cardStorage.deleteCard(cardId).then(function(response){
			cardStorage.getCardList().then(function(cardList){
				$scope.activities = cardList;
			});
		});
	}
});