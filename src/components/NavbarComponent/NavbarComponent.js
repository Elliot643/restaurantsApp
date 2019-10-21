import React from 'react';
import './NavbarComponent.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { Navbar, Nav, FormControl, Form } from 'react-bootstrap'
class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        let history = useHistory();
        history.push("/search/" + this.state.value)
        event.preventDefault();
    }

    render() {


        var navMenu;
        if (sessionStorage.loggedIn) {
            navMenu = 
                <Nav className="mr-auto">
                    <Nav.Link href="/user">User</Nav.Link>
                    <Nav.Link href="/resturants">Resturants</Nav.Link>
                    <Nav.Link href="/addRestaurant"> Add Resturants</Nav.Link>
                    <Nav.Link href="/login">Log Out</Nav.Link>

                </Nav>
              



            
        } else {
            navMenu =
                <Nav className="mr-auto">
                    <Nav.Link href="/signup">Sign up</Nav.Link>
                    <Nav.Link href="/resturants">Resturants</Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>

                </Nav>
               
              
        }
        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                {navMenu}
                <Nav.Link href="/about">About</Nav.Link>
               

                    <Form inline onSubmit={this.handleSubmit}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.value} onChange={this.handleChange} id="searchBar"/>
                        <Link to={{ pathname: '/search/' + this.state.value }} id="submitBtn">Search</Link>                    </Form>
                </Navbar.Collapse>
            </Navbar>
            // <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="theNavbar">
            //     <a class="navbar-brand" href="#"></a>
            //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            //         <span class="navbar-toggler-icon"></span>
            //     </button>

            //     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            //         {navMenu}
            //         <form className="form-inline" onSubmit={this.handleSubmit}>
            //             <input className="form-control" value={this.state.value} onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search" id="searchBar" />
            //             {/*<button id="submitBtn" href={'/search/' + this.state.value} type="submit">Search </button>*/}
            //             <Link to={{ pathname: '/search/' + this.state.value }} id="submitBtn">Search</Link>
            //         </form>
            //     </div>
            // </nav>

        )
    }
}

export default NavbarComponent;

