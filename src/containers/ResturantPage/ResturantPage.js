import React from 'react';
import MapComponent from '../../components/MapComponent/MapComponent';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import './ResturantPage.css';


class ResturantPage extends React.Component {

  //Setting default states in the constructor.
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;

    Promise.all([
      axios.get("https://restaurantbackend-apis.herokuapp.com/restaurant/id/" + id)
    ])
      .then((result) => {
        this.setState({
          restaurantObj: result[0].data
        })
      })

    this.state = {
      restaurantObj: "",
      navMenu: "",
      reviewText: "",
      rating: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    if (!sessionStorage.loggedIn) {
      alert('You should be logged in')
    }
    else {
      axios.post('https://restaurantbackend-apis.herokuapp.com/review/create', {
        user_id: sessionStorage.userID,
        restaurant_id: this.state.restaurantObj.id,
        rating: this.state.rating,
        reviewText: this.state.reviewText
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });

    }




    event.preventDefault();
  }

  render() {


    console.log(this.state.restaurantObj)
    console.log(sessionStorage.userName)
    if (this.state.restaurantObj.ownerName === sessionStorage.username && sessionStorage.userName !== undefined) {
      this.state.navMenu = <div>
        <Button href="/restaurant/update" color="primary" variant="outlined">
          Edit Restaurant
        </Button>
      </div>

    }
    else {

    }
    return (
      <React.Fragment>
        {this.state.navMenu}
        <h1>{this.state.restaurantObj.name}</h1>

        <div className="resturantBody">
          <hr />
          <div className="resturantImgDiv">
            <img src={require('../../images/background.jpg')} className='img-fluid' alt=' restaurant' />
          </div>
          <p>Description: {this.state.restaurantObj.description}</p>
          <p>Tags: {this.state.restaurantObj.tags}</p>
          <hr />
          <div className="mapDiv">
            <MapComponent address={this.state.restaurantObj.address} />
            <div>
              <form onSubmit={this.handleSubmit}>
                <TextField onChange={this.handleChange}
                  fullWidth id="outlined-multiline-static"
                  name="reviewText"
                  label="Review text"
                  multiline
                  rows="4"
                  margin="normal"
                  variant="outlined"

                />
                <br></br>
                <TextField onChange={this.handleChange}
                  fullWidth margin="normal"
                  name="rating"
                  variant="outlined"
                  label="Add the number of stars, 0-5 with 0.5 increment"

                />

                <Fab type="submit" color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </form>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    )
  }
}
export default ResturantPage;