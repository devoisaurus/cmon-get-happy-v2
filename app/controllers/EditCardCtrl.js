"use strict";

app.controller("EditCardCtrl", function($scope, $location, $routeParams, cardStorage){
	$scope.title = "Edit Activity";
	$scope.submitButtonText = "Update";
	$scope.newCard = {};

	cardStorage.getSingleCard($routeParams.cardId)
	.then(function successCallback(response){
		$scope.newCard = response;
	});
	console.log("ahoy there card");

	$scope.addNewCard = function(){
		cardStorage.updateCard($routeParams.cardId, $scope.newCard)
		.then(function successCallback(response){
			Materialize.toast(`"${newCard.name}" has been updated!`, 4000, 'light-green darken-4');
			$location.url("/cards/userCards");
		});
	};
});