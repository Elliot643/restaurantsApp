import React from 'react';

import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class SignupForm extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            email:"",
            role:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
      
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    handleOptionChange = changeEvent => {
        this.setState({
            role: changeEvent.target.value
        });
    }

    handleSubmit(event){
        if(this.state.username === "" || this.state.password === "" || this.state.email === ""){
            alert("Please enter values for all fields");
        }
        else{
            alert('username: ' + this.state.username + ', password:' +
                this.state.password+", email: "+this.state.email+", role: "+this.state.role);

            axios.post('https://restaurantbackend-apis.herokuapp.com/user/create', {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                role: this.state.role
            }).then(function(response){
                console.log(response);
            }).catch(function(error){
                console.log(error);
            });
        }
        

        
        event.preventDefault();
    }

    
    
    render(){
        const options = [1,2]


        const classes =  makeStyles(theme => ({
        '@global': {
            body: {
            backgroundColor: theme.palette.common.white,
            },
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        }));



        return(



  <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form  onSubmit={this.handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={this.handleChange}
                required
                name="username"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="User name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={this.handleChange}
                required
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={this.handleChange}
                required
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
                <Grid></Grid>
                     <div>
                         <label>Role:</label>
                         <div>
                             <label>Reviewer</label>        
                             <input type="radio" value="1" name="reviewer" 
                                             onChange={this.handleOptionChange} 
                                             checked={this.state.role === "1"}/>
                             <label>Owner</label>
                             <input type="radio" value="2" name="owner" 
                                             onChange={this.handleOptionChange}
                                             checked={this.state.role === "2"}/>
                         </div>
                     </div>
                </Grid>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            value="submit"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
        );
    }
}
export default SignupForm;