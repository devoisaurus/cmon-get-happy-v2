app.controller("AllCardsCtrl", function($scope, $http){
	$scope.activities = [];

	$http.get("https://cmon-get-happy.firebaseio.com/activities.json")
	.success(function(cardObject){
		var cardList = cardObject;
		Object.keys(cardList).forEach(function(key){
			cardList[key].id=key;
			$scope.activities.push(cardList[key]);
		})
	});
});