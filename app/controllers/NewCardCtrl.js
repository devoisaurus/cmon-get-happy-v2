app.controller("NewCardCtrl", function($scope, $http, $location){
	$scope.newCard = {
		cost: "",
		description: "",
		location: "",
		name: "",
		public: true,
		time: ""
	};

	$scope.addNewCard = function(){
	$http.post(
		"https://cmon-get-happy.firebaseio.com/activities.json",
		JSON.stringify({
			cost: $scope.newCard.cost,
			description: $scope.newCard.description,
			location: $scope.newCard.location,
			name: $scope.newCard.name,
			time: $scope.newCard.time,
			public: true
		})
		).success(function(response){
			console.log(response);
			$location.url("/cards/all")
		})
	};
});