
exports.getBeers = function getBeers(howmany){
    var beer = "🍺";
    var beers = [];
    var numberOfBeers = parseInt(howmany);
    for(var i = 0; i < numberOfBeers; i++){
        beers.push(beer)
    }
    return {
        beers, 
        count:beers.length
    }
}

exports.getGoals = function getGoals(goalsAgainst, minute, ourgoals){
    var minutesLeft = 90 - minute;
	var goalsNeeded = parseInt(goalsAgainst) - parseInt(ourgoals) + 1;
	var res = minutesLeft / goalsNeeded; 
	return  {
        minutesLeft,
        goalsNeeded,
        eachMinutesAGoalIsNeeded:Math.floor(res)
    }
}