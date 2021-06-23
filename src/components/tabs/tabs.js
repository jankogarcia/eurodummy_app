import React, {Component} from 'react';
import Beers from '../beers/beers';
import Goals from '../goals/goals';

class Tabs extends Component{

    openTab = (evt, cityName) => {
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

    renderTabs = () => (
        <div>
            <div className='tab'>
                <button className="tablinks" onClick={(evt) => this.openTab(evt, 'beers')}>Beers</button>
                <button className="tablinks" onClick={(evt) => this.openTab(evt, 'goals')}>Goals</button>
            </div>
            <div id="beers" className="tabcontent">
                <Beers />
            </div>
            <div id="goals" className="tabcontent">
                <Goals />
            </div>
        </div>        
    )

    render(){
        return this.renderTabs();
    }
}

export default Tabs;