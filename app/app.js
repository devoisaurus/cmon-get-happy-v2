var app = angular.module("GetHappy", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.
		when('/cards/all', {
			templateUrl: 'partials/all-cards.html',
			controller: "GetHappyCtrl"
		}).
		when('/cards/add', {
			templateUrl: 'partials/add-card.html',
			controller: "GetHappyCtrl"
		}).
		when('/cards/user', {
			templateUrl: 'partials/my-cards.html',
			controller: "GetHappyCtrl"
		}).
		otherwise('cards/all');
});
