import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import LoginForm from "../LoginPage/LoginForm/LoginForm";


class LoginPage extends React.Component {
    render() {

        return (
            <React.Fragment>
                <h4>Login Page</h4>
                <LoginForm/>
                <hr />
            </React.Fragment>
        )
    }
}
export default LoginPage;