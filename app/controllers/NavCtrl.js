app.controller("NavCtrl", function($scope){
	$scope.navItems = [
		{
			name:"Logout",
			url: '#/logout'
		},
		{
			name:"See all cards",
			url: '#/cards/all'
		},
		{
			name:"See my cards",
			url: '#/cards/user'
		},
		{
			name:"Add a card",
			url: '#/cards/add'
		}
		];
});