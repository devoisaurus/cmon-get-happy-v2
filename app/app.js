var app = angular.module("GetHappy", []);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name:"Logout"}, {name:"See all cards"}, {name:"See my cards"}, {name:"Add a card"}, ]
});

app.controller("GetHappyCtrl", function($scope){
	$scope.welcome = "hello";
	$scope.showListView = true;

	$scope.newCard = function(){
		console.log("you clicked new card");
	$scope.showListView = false;
};

$scope.allCards = function(){
	console.log("you clicked all cards");
	$scope.showListView = true;
};

});