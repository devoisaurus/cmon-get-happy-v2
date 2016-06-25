var app = angular.module("GetHappy", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.
		when('/cards/all', {
			templateUrl: 'partials/all-cards.html',
			controller: "AllCardsCtrl"
		}).
		when('/cards/add', {
			templateUrl: 'partials/add-card.html',
			controller: "NewCardCtrl"
		}).
		when('/cards/user', {
			templateUrl: 'partials/my-cards.html',
			controller: "UserCardsCtrl"
		}).
		otherwise('cards/all');
});
