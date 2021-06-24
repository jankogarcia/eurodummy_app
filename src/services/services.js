const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const getBeers = (howmany) => {
    var beer = "🍺";
    var beers = [];
    var numberOfBeers = parseInt(howmany);
    numberOfBeers = numberOfBeers > 500 ? 500 : numberOfBeers;

    for(var i = 0; i < numberOfBeers; i++){
        beers.push(beer)
    }
    return {
        beers, 
        count:beers.length
    }
}

const getGoals = (goalsAgainst, minute, ourgoals, totalMinutes) => {
    var minutesLeft = (totalMinutes || 90) - minute;
	var goalsNeeded = parseInt(goalsAgainst) - parseInt(ourgoals) + 1;
	var res = minutesLeft / goalsNeeded; 
	res = Math.floor(res);
    
    //TOOD:
    // beersNeeded should be calculated based on res & goalsNeeded, 
    // the bigger goalsNeeded and the smaller res = beersNeeded should increase
    // rigth now is just a random number between 2 and 10
    var beersNeeded = getRandomInt(2, 10); 

    return  {
        minutesLeft,
        goalsNeeded,
        eachMinutesAGoalIsNeeded:res,
        beers:getBeers(beersNeeded)
    }
}

exports.getBeers = getBeers;
exports.getGoals = getGoals;