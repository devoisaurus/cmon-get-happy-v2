"use strict";

app.controller("UserCardsCtrl", function($scope, $location, cardStorage){
	$scope.userActivities = [];

	cardStorage.getUserCards().then(function(userCards){
			$scope.userActivities=userCards;
			console.log("userCards", userCards);
		});

$scope.deleteCard = function(cardToDelete){
	cardStorage.deleteCard(cardToDelete).then(function(response){
		cardStorage.getUserCards().then(function(cardCollection){
			$scope.baseCards = cardCollection;
		});
	});
};

	}
);