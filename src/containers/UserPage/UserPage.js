import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './UserPage.css';



class UserPage extends React.Component {


constructor(props) {
  super(props);

  this.state = {
    userArray: [],
   // id: 1,
    error : null
  }
}

  componentDidMount() {
    Promise.all([
      //axios.get('https://restaurantbackend-apis.herokuapp.com/user/id/' + this.state.id)
      axios.get('https://restaurantbackend-apis.herokuapp.com/user/getAll')
    ])
   .then(([response]) => {
     this.setState({
      userArray: response.data
    })

    console.log(response.data);
   })
  }

  

  render() {  

    const users = this.state.userArray.map(response =>(
      <div>
        {response.username}
        {response.email}
      </div>
    ))

    const useStyles = makeStyles(theme => ({
      button: {
        margin: theme.spacing(1),
      }
    }));

    return (
      <div>

        <Link to="/UserUpdatePage">
          <Button renderAs="button" variant="contained" color="primary" className={useStyles.button}>
            <span>Update user</span>
          </Button>
        </Link><br></br>
        

      {users}

      </div>
    );
  }

}
export default UserPage;


