"use strict";

app.controller("BaseCardsCtrl", function($scope, $http, $location, cardStorage){
	$scope.baseCards = [];

	cardStorage.getBaseCards().then(function(cardCollection){
		$scope.baseCards = cardCollection;
	});

	$scope.newUserCard = function(){
		cardStorage.addToUserCards(card.id)
		.then(function successCallback(response){
			console.log(response);
			$location.url("/cards/user")
		})
	}
});