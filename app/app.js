var app = angular.module("GetHappy", []);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name:"Logout"}, {name:"See all cards"}, {name:"See my cards"}, {name:"Add a card"}, ];
});

app.controller("GetHappyCtrl", function($scope){
	$scope.welcome = "hello";
	$scope.showListView = false;
	$scope.card="";
	$scope.newCard = {};

	$scope.activities = [
	{
		id: 0,
		cost: "$",
		description: "Take a walk in the park",
		location: "outdoors",
		name: "Take a walk",
		public: true,
		time: "10 minutes"
},
	{
		id: 1,
		cost: "$",
		description: "Remove 3 things",
		location: "indoors",
		name: "declutter",
		public: true,
		time: "10 minutes"
	},
	{
		id: 3,
		cost: "$$",
		description: "words",
		location: "in out",
		name: "trst",
		public: true,
		time: "time"
	}
];


	$scope.newCard = function(){
		console.log("you clicked new card");
	$scope.showListView = false;
};

$scope.allCards = function(){
	console.log("you clicked all cards");
	$scope.showListView = true;
};

});