import React from 'react';
import './NavbarComponent.css';
import {Link} from 'react-router-dom';



const NavbarComponent = (props) => {
    
  

    return (
        
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="theNavbar">
            <a className="navbar-brand" href="#"></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/resturant"> Resturants </Link>
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