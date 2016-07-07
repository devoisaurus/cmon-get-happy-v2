"use strict";

app.controller("NewCardCtrl", function($scope, $http, $location, cardStorage){
	$scope.title = "New Card";
	$scope.submitButtonText = "Add New Card";
	$scope.newCard = {
		cost: "",
		description: "",
		location: "",
		name: "",
		time: "",
		uid: ""
	};

	$scope.addNewCard = function(){
		cardStorage.postNewCard($scope.newCard)
		.then(function successCallback(response){
			console.log(response);
			$location.url("cards/all")
		});
	};
});