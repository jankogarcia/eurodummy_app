import React, {Component} from 'react';
import {getBeers} from '../../services/services';
// import axios from 'axios';

class Beers extends Component {

    state = {
        beersData:null,
        howManyBeers:3
    };

    updateHowManyBeers(element){
        this.setState({howManyBeers:element.target.value});
    }

    renderBeers = () => {
        return (this.state.beersData !== null) ? 
        <div>
            <h1>{this.state.beersData.beers}</h1>
        </div>
        : null
    }
    
    getBeers = () => {
        var numberofbeers = this.state.howManyBeers;
        var response = getBeers(numberofbeers);
        this.setState({
            beersData:response
        });
        // axios.get(`/api/beers?howmany=${numberofbeers}`)
        // .then(response => {
        //     this.setState({
        //         beersData: response.data
        //     });
        // })
    }

    renderBeersPage = () => (
        <div>
            <label className="field field_v3">
                    <input 
                    type='number' 
                    className='field__input'
                    placeholder='drop a number here'
                    onChange={(element) => this.updateHowManyBeers(element)}></input>
            </label>
                
            <button className='button roundedButton' onClick={() => this.getBeers()} >Beer me</button>
            { this.renderBeers() }
        </div>
    )

    render(){
        return this.renderBeersPage();
    }
}

export default Beers;