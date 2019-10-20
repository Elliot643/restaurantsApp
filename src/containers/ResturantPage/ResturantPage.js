import React from 'react';
import MapComponent from '../../components/MapComponent/MapComponent';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import './ResturantPage.css';


class ResturantPage extends React.Component {

  //Setting default states in the constructor.
  constructor(props) {
    super(props);

    const {id} = this.props.match.params;
    
    Promise.all([
      axios.get("https://restaurantbackend-apis.herokuapp.com/restaurant/id/"+id)
    ])
      .then((result) => {
        this.setState({
          restaurantObj: result[0].data
        })
      })

    this.state = {
      restaurantObj: ""
    }

}


  render() {
        
    var navMenu 
    console.log(this.state.restaurantObj )
    console.log(sessionStorage.userName )
      if (this.state.restaurantObj.ownerName === sessionStorage.username &&sessionStorage.userName !== undefined   ){
        navMenu = <div>
        <Button href="/restaurant/update" color="primary" variant="outlined">
            Edit Restaurant
        </Button>
    </div>
      }
      else {
        navMenu = <p>Rate this restaurant</p>
      }
        return (
          <React.Fragment>
              {navMenu}
            <h1>{this.state.restaurantObj.name}</h1>

            <div className="resturantBody">
            <hr/>
              <div className="resturantImgDiv">
                <img src= {require('../../images/background.jpg')} className='img-fluid' alt =' restaurant' />
              </div>
              <p>Description: {this.state.restaurantObj.description}</p>
              <p>Tags: {this.state.restaurantObj.tags}</p>
              <hr/>
              <div className="mapDiv">
                <MapComponent address={this.state.restaurantObj.address} />
              </div>
              <hr/>
            </div>
          </React.Fragment>
        )
    }
}
export default ResturantPage;