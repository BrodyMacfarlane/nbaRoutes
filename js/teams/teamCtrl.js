var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function(){
		if ($scope.showNewGameForm = false){
			$scope.showNewGameForm = true;
		}else $scope.showNewGameForm = false;
	}
	console.log($routeParams.team);
	if ($routeParams.team = 'utahjazz'){
		$scope.homeTeam = 'Utah Jazz';
		$scope.logoPath = '/images/jazz-logo.png'
	}
	if ($routeParams.team = 'miamiheat'){
		$scope.homeTeam = 'Miami Heat';
		$scope.logoPath = '/images/heat-logo.png'
	}
	if ($routeParams.team = 'losangeleslakers'){
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.logoPath = '/images/lakers-logo.png'
	}
	$scope.submitGame = function(){
		newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
	}
	$scope.newGame = function(){
		teamService.getTeamData($scope.newGame).then(function(data){
			$scope.teamData = data;
			$scope.newGame = {};
			$scope.toggleNewGameForm();
			console.log(teamData);
		})
	}
	console.log($scope);
});