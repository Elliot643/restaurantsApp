import React from 'react';
import './NavbarComponent.css';
import {Link} from 'react-router-dom';



const NavbarComponent = (props) => {
    
  

    return (
        
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="theNavbar">
            <a class="navbar-brand" href="#"></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/resturant"> Resturant </Link>
                    <Link to="/user"> User </Link>
                    <Link to="/resturants"> Resturants </Link>

                </ul>

                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" id="searchBar" />
                    <button id="submitBtn" type="submit">Search </button>
                </form>

            </div>
        </nav>
             
    )
};

export default NavbarComponent