"use strict";

app.controller("BaseCardsCtrl", function($scope, $http, $location, cardStorage){
	$scope.baseCards = [];

	cardStorage.getBaseCards().then(function(cardCollection){
		$scope.baseCards = cardCollection;
	});

	$scope.newUserCard = function(card){
		cardStorage.addToUserCards(card)
		.then(function successCallback(response){
			console.log(response);
			$location.url("/cards/user")
		})
	}
});
