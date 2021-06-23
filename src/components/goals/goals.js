import React, {Component} from 'react';
import {getGoals} from '../../services/services';
// import axios from 'axios';

class Goals extends Component{

state = {
    goalsAgainst:null,
    minute:null,
    ourgoals:null,
    calculationData:null
}

updateState = (field, element) => {
   switch(field){
        case 'goalsAgainst':
            this.setState({goalsAgainst:element.target.value});
            break;
        case 'minute':
            this.setState({minute:element.target.value});
            break;
        case 'ourgoals':
            this.setState({ourgoals:element.target.value});
            break;
        default:
            break;
    }
}

fetchCalculation = () => {
    var goalsAgainst = this.state.goalsAgainst;
    var minute = this.state.minute;
    var ourGoals = this.state.ourgoals;

    var response = getGoals(goalsAgainst, minute, ourGoals);
    
    this.setState({
        calculationData: response
    });
    // axios.get(`/api/match?goalsagainst=${goalsAgainst}&minute=${minute}&ourgoals=${ourGoals}`)
    // .then(response => {
    //     console.log(response.data);
    //     this.setState({
    //         calculationData: response.data
    //     });
    // });
}

renderResults = () => {
    return (this.state.calculationData !== null) ? 
    <div>
        <p>Minutes Left:{this.state.calculationData.minutesLeft}</p>
        <p>Goals Needed:{this.state.calculationData.goalsNeeded}</p>
        <p>Each {this.state.calculationData.eachMinutesAGoalIsNeeded} minute(s) we need a goal!!</p>
    </div>
    : null
}

renderPage = () => (
    <div>
        <label className="field field_v2">
            <input 
            type='number' 
            className="field__input" 
            placeholder="drop # of goals against" 
            onChange={(element) => this.updateState('goalsAgainst', element)} />
            <span className="field__label-wrap">
                <span className="field__label"># of goals against</span>
            </span>
        </label>

        <label className="field field_v2">
            <input 
            type='number' 
            className="field__input" 
            placeholder="drop the current minute"
            onChange={(element) => this.updateState('minute', element)} />
            <span className="field__label-wrap">
                <span className="field__label">current minute</span>
            </span>
        </label>

        <label className="field field_v3">
            <input 
            type='number' 
            className="field__input" 
            placeholder="drop # of our goals"
            onChange={(element) => this.updateState('ourgoals', element)} />
            <span className="field__label-wrap">
                <span className="field__label"># of out goals</span>
            </span>
        </label>
        <br />
        <button className='button roundedButton' onClick={() => this.fetchCalculation()} >Get Results</button>
        {this.renderResults()}
    </div>
)

    render(){
        return this.renderPage();
    }
}

export default Goals;