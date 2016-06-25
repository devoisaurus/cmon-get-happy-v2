var app = angular.module("GetHappy", []);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name:"Logout"}, {name:"See all cards"}, {name:"See my cards"}, {name:"Add a card"}, ];
});

app.controller("GetHappyCtrl", function($scope){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.name="";
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
]


	$scope.newCard = function(){
		console.log("you clicked new card");
		$scope.showListView = false;
};

$scope.allCards = function(){
	console.log("you clicked all cards");
	$scope.showListView = true;
};

$scope.addNewCard = function(){
	$scope.newCard.public = true;
	$scope.newCard.id = $scope.activities.length;
	console.log("you added a new card", $scope.newCard);
	$scope.activities.push($scope.newCard);
	$scope.newCard="";
}

});