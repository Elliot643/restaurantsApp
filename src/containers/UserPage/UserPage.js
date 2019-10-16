import React from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';




class UserPage extends React.Component {
   
    render() {

        //Navbar
        const navbar = <NavbarComponent />

        return (
          <React.Fragment>
            {navbar}
            <br />
            <br />

            <h4>User Page</h4>
            <hr />
          </React.Fragment>
        )
    }
}

export default UserPage;