app.controller("UserCardsCtrl", function($scope, $http, $location, cardStorage){
	$scope.myActivities = [];

	cardStorage.addToMyCards().then(function(myCards){
		console.log("myCards from promise", myCards);
			$scope.myActivities=myCards;
		});
	}
);