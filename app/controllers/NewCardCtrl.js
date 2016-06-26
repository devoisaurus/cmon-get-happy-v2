app.controller("NewCardCtrl", function($scope, $http, $location, cardStorage){
	$scope.newCard = {
		cost: "",
		description: "",
		location: "",
		name: "",
		public: false,
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