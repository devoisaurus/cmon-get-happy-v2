"use strict";

app.controller("UserCardsCtrl", function($scope, $location, cardStorage){
	$scope.userActivities = [];

	cardStorage.getUserCards().then(function(userCards){
			$scope.userActivities=userCards;
			console.log("userCards", userCards);
		});
	}
);