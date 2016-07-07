"use strict";

var app = angular.module("GetHappy", ["ngRoute"])
.constant("firebaseURL", "https://cmon-get-happy.firebaseio.com/")

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    console.log("isAuth");
    resolve();
  } else {
    reject();
  }
})

app.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/all-cards.html',
			controller: "BaseCardsCtrl",
			resolve: {isAuth}
		}).
		when('#/cards/all', {
			templateUrl: 'partials/all-cards.html',
			controller: "BaseCardsCtrl",
			resolve: {isAuth}
		}).
		when('#/cards/user', {
			templateUrl: 'partials/my-card.html',
			controller: "UserCardsCtrl",
			resolve: {isAuth}
		}).
		when('#/cards/add', {
			templateUrl: 'partials/add-card.html',
			controller: "NewCardCtrl",
			resolve: {isAuth}
		}).
		when('#/cards/:cardId/edit', {
			templateUrl: 'partials/add-card.html',
			controller: "EditCardCtrl",
			resolve: {isAuth}
		}).
		when('/login', {
			templateUrl:'partials/login.html',
			controller: "LoginCtrl",
		}).
		when('/logout', {
			templateUrl: 'partials/login.html',
			controller: "LoginCtrl",
		})
});