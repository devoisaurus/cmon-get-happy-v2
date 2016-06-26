var app = angular.module("GetHappy", ["ngRoute"])
.constant("firebaseURL", "https://cmon-get-happy.firebaseio.com/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
})

app.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/all-cards.html',
			controller: "AllCardsCtrl",
			resolve: {isAuth}
		}).
		when('/cards/all', {
			templateUrl: 'partials/all-cards.html',
			controller: "AllCardsCtrl",
			resolve: {isAuth}
		}).
		when('/cards/add', {
			templateUrl: 'partials/add-card.html',
			controller: "NewCardCtrl",
			resolve: {isAuth}
		}).
		when('/cards/user', {
			templateUrl: 'partials/my-cards.html',
			controller: "UserCardsCtrl",
			resolve: {isAuth}
		}).
		when('/login', {
			templateUrl:'partials/login.html',
			controller: "LoginCtrl",
			resolve: {isAuth}
		}).
		when('/logout', {
			templateUrl: 'partials/login.html',
			controller: "LoginCtrl",
			resolve: {isAuth}
		}).
		otherwise('/');
});

app.run(($location) => {
  let cardRef = new Firebase("https://cmon-get-happy.firebaseio.com/");

  cardRef.onAuth(authData => {
    if(!authData){
      $location.path("/login");
    }
  })
})
