import React from 'react';
import './NavbarComponent.css';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


class NavbarComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        //alert("Search: " + this.state.value);
        let history = useHistory();
        history.push("/search/"+this.state.value)
        event.preventDefault();  
    }
  
    render(){
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
                        {/*<Link to="/resturant"> Resturants </Link>*/}
                        <Link to="/user"> User </Link>
                        <Link to="/resturants"> Resturants </Link>
                        <Link to="/addRestaurant"> Add Resturants </Link>

                    </ul>

                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <input className="form-control" value={this.state.value} onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search" id="searchBar" />
                        {/*<button id="submitBtn" href={'/search/' + this.state.value} type="submit">Search </button>*/}
                        <Link to={{ pathname: '/search/' + this.state.value }} id="submitBtn">Search</Link>
                    </form>

                </div>
            </nav>
                
        )
    }
}

export default NavbarComponent;