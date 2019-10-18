import React from 'react';
import SelectDropdown from 'react-dropdown'

let axios = require("axios");

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
        
        event.preventDefault();
    }

    
    
    render(){
        const options = [1,2]

        return(
            <div class="signupformouter">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User name:</label>
                        <input type="text" name="username" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={this.handleChange}/>
                    </div>

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
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default SignupForm;