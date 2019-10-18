import React from 'react';

let axios = require("axios");

class LoginForm extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.username + ' and a password:' +this.state.password);

        axios.post('https://restaurantbackend-apis.herokuapp.com/user/login', {
            username: this.state.username,
            password: this.state.password
        }).then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log(error);
        });

        event.preventDefault();
    }

    
    
    render(){
        return(
            <div class="loginformouter">
                <form onSubmit={this.handleSubmit}>

                    <label>User name:</label>
                    <input type="text" name="username" onChange={this.handleChange}/>
                    
                    <label>Password:</label>
                    <input type="password" name="password" onChange={this.handleChange}/>
                    
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default LoginForm;