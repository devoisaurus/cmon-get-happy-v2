"use strict";

app.controller("BaseCardsCtrl", function($scope, $location, cardStorage){
	$scope.baseCards = [];

	cardStorage.getBaseCards().then(function(cardCollection){
		$scope.baseCards = cardCollection;
	});

	$scope.addToUserCards = (kitten) => {

		cardStorage.addToUserCards(kitten).then(() => {
			Materialize.toast(`"${kitten.name}" has been added to your cards!`, 4000, 'cyan darken-4');
		});
	};
});
