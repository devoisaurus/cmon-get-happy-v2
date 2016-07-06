"use strict";

app.controller("UserCardsCtrl", function($scope, $location, cardStorage){
	$scope.userActivities = [];

	cardStorage.getUserCards().then(function(cardCollection){
			$scope.userActivities=cardCollection;
		});
	}
);