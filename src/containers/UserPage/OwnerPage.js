import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './UserPage.css';



class OwnerPage extends React.Component {


constructor(props) {
  super(props);
  this.userid = this.props.userid;

  this.state = {
    userArray: [],
   // id: 1,
    error : null
  }
}

  componentDidMount() {
    Promise.all([
      axios.get('https://restaurantbackend-apis.herokuapp.com/user/id/'+this.userid)
    ])
   .then(([response]) => {
       console.log('sent by probs : '+ this.props.userid)
       console.log(response)
     this.setState({
      userArray: response.data
    })

    console.log(response.data);
   })
  }

  

  render() {  

   

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
        

     

      </div>
    );
  }

}
export default OwnerPage;
