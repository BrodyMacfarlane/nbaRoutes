var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
	this.addNewGame = function(gameObj){
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		if(parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)){
			gameObj.won = true;
		} else
			gameObj.won = false;
		return $http({
	      method: 'POST',
	      url: "https://api.parse.com/1/classes/" + gameObj.homeTeam,
	      data: gameObj //possibly wrong
    	});
	}
	var dfd = $q.defer();
	this.getTeamData = function(team){
		var url = 'https://api.parse.com/1/classes/' + team;
			$http({
				method: 'GET',
				url: url,
			}).then(function(data){
				var results = data.data.results;
				var wins = 0;
				var losses = 0;
				for (i = 0; i < results.length; i++){
					if (results[i].won = true){
						wins++;
					}else
						losses++;
				}
				results.wins = wins;			//Might need to place these
				results.losses = losses;
				console.log(results.wins);			//Out of the promise
				dfd.resolve(results);				
			})
		return dfd.promise
	}
});