

import React from 'react';
import Reviewer from './Reviewer.js';
import RestaurantOwner from './OwnerPage.js';

class Dashboard extends React.Component {


    render() {
        switch(sessionStorage.role){
            case "1":
                return (
                    <div align="center">
                        <h1>Welcome as a Reviewer</h1>
                        <Reviewer 
                            userid={this.userid}
                        /> 
                    </div>
                );
            case "2":
                return (
                    <div align="center">
                        <h1>Welcome as a Restaurant Owner</h1>
                        <RestaurantOwner 
                            userid={sessionStorage.userID}
                        />
                    </div>
                );
            default:
                return (
                    <div align="center">
                        <h1>Please log in first</h1>
                    </div>
                );
        }
    }
}

export default Dashboard;