"use strict";

app.controller("NewCardCtrl", function($scope, $location, cardStorage){
	$scope.title = "Add a New Card";
	$scope.submitButtonText = "Add New Card";
	$scope.newCard = {
		cost: "",
		description: "",
		location: "",
		name: "",
		time: "",
		uid: ""
	};

	$scope.addNewCard = function(newCard){
		cardStorage.addNewCard(newCard)
		.then(function successCallback(response){
			Materialize.toast(`"${newCard.name}" added to your cards!`, 4000, 'light-green darken-4')
			$location.url("cards/user")
		});
	};
});