"use strict";

app.controller("BaseCardsCtrl", function($scope, $http, $location, cardStorage){
	$scope.baseCards = [];

	cardStorage.getBaseCards().then(function(cardCollection){
		$scope.baseCards = cardCollection;
	});
});