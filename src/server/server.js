const express = require('express');
const config = require('./config/config').get(process.env.NODE_ENV);

const app = express();

const getGoals = (goalsAgainst, minute, ourgoals, totalMinutes) => {
    var minutesLeft = (totalMinutes || 90) - minute;
    console.log(totalMinutes);
    console.log(minutesLeft);
	var goalsNeeded = parseInt(goalsAgainst) - parseInt(ourgoals) + 1;
	var res = minutesLeft / goalsNeeded; 
	return  {
        minutesLeft:minutesLeft,
        goalsNeeded:goalsNeeded,
        eachMinutesAGoalIsNeeded:Math.floor(res)
    }
}

const getGoalsCalc = (req, res) => {
    //?goalsagainst=3&minute=32&ourgoals=2&totalminutes=97
    var goalsAgainst = req.query.goalsagainst;
    var minute = req.query.minute;
    var ourGoals = req.query.ourgoals;
    var totalMinutes = req.query.totalminutes;
    var answer = getGoals(goalsAgainst, minute, ourGoals, totalMinutes);
    return res.status(200).send(answer);
}

const getBeers = (req, res) => {
    var beer = "🍺";
    var beers = [];
    var numberOfBeers = parseInt(req.query.howmany);
    for(var i = 0; i < numberOfBeers; i++){
        beers.push(beer)
    }
    return res.status(200).json({beers:beers, count:beers.length});
}

app.get('/api/match', getGoalsCalc);
app.get('/api/beers', getBeers);

app.listen(config.PORT, () => {
    console.log(`server running on port: ${config.PORT}`);
});