import React from 'react';

import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import SignupForm from './SignupForm/SignupForm';


class SignupPage extends React.Component{

        render(){

        return (
            <React.Fragment>
                <h4>Signup Page</h4>
                <SignupForm/>
                <hr />
            </React.Fragment>
        )
    }
}
export default SignupPage;
