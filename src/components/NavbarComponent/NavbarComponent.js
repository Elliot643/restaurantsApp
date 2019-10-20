import React from 'react';
import './NavbarComponent.css';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
        background: '#363636',
        flexGrow: 1,
        border: 0,
        borderRadius: 3,
    },
    toolbarTitle: {
        flexGrow: 1,
        color: "white"
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: "white   "
    },
}));

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
      
    const classes = useStyles();
    var loginButton;
    if (sessionStorage.loggedIn) {
        loginButton = <nav>
            <Link className={classes.link} to="/">Home</Link>
            <Link className={classes.link} to="/resturant"> Resturants </Link>
            <Link className={classes.link} to="/user"> User </Link>
            <Link className={classes.link} to="/resturants"> Resturants </Link>
            <Link className={classes.link} to="/addRestaurant"> Add Resturants </Link>
            <Button href="/login" color="primary" variant="outlined" className={classes.link}>
                Log out
        </Button>

        </nav>
    } else {
        loginButton = <nav>
            <Link className={classes.link} to="/">Home</Link>
            <Link className={classes.link} to="/signup">Sign up</Link>
            <Link className={classes.link} to="/resturants"> Resturants </Link>
            <Button href="/login" color="primary" variant="outlined" className={classes.link}>
                Log In
        </Button>
        </nav>
    }
        return (
            
            
             <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Restaurants World
                </Typography>
                {loginButton}

            </Toolbar>
            </AppBar>

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

