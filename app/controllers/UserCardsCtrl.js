"use strict";

app.controller("UserCardsCtrl", function($scope, cardStorage, $routeParams){
	$scope.userCards = [];

	cardStorage.getUserCards().then(function(cardCollection){
			$scope.userCards=cardCollection;
		});

	$scope.selectedCard = $scope.userCards.filter(function(card){
		return card.id === $routeParams.cardId;
	})[0];

$scope.deleteCard = function(cardToDelete){
	cardStorage.deleteCard(cardToDelete).then(function(response){
		Materialize.toast(`"${cardToDelete.name}" removed from your cards!`, 4000, 'cyan darken-4');
		cardStorage.getUserCards().then(function(cardCollection){
			$scope.userCards = cardCollection;
		});
	});
};

	});