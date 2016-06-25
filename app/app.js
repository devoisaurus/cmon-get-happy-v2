var app = angular.module("GetHappy", []);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name:"Logout"}, {name:"See all cards"}, {name:"See my cards"}, {name:"Add a card"}, ]
});

app.controller("GetHappyCtrl", function($scope){
	$scope.welcome = "hello";

});