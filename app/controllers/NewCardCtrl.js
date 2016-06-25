app.controller("NewCardCtrl", function($scope){
	$scope.newCard = {};
	$scope.activities = [
		{
			id: 0,
			name: "Take a walk",
			description: "Take a walk in the park",
			cost: "$",
			time: "10 minutes",
			location: "outdoors",
			public: true
		},
		{
			id: 1,
			name: "declutter",
			description: "Remove 3 things",
			cost: "$",
			time: "10 minutes",
			location: "indoors",
			public: true
		},
		{
			id: 2,
			name: "test",
			description: "words",
			cost: "$$",
			time: "time",
			location: "in out",
			public: true
		}
	];

	$scope.addNewCard = function(){
	$scope.newCard.public = true;
	$scope.newCard.id = $scope.activities.length;
	console.log("you added a new card", $scope.newCard);
	$scope.activities.push($scope.newCard);
	$scope.newCard="";
}

});