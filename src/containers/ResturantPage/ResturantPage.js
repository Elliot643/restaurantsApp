import React from 'react';
import MapComponent from '../../components/MapComponent/MapComponent';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import axios from 'axios';
import './ResturantPage.css';
import { valueToNode } from '@babel/types';


class ResturantPage extends React.Component {

  //Setting default states in the constructor.
  constructor(props) {
    super(props);

    this.state = {
      Api :'https://restaurantbackend-apis.herokuapp.com/restaurant/id/',
      restaurantObj: ""
    }

}

  







  //Fetching data from the API endpoint.
  componentDidMount() {
    Promise.all([
      axios.get(this.state.Api+ this.state.id)
    ])
      .then((result) => {
        this.setState({
          restaurantObj: result[0].data
        })
        console.log(result[0].data);
      })
  }


  render() {
    
    Promise.all([
      axios.get(this.state.Api+ this.state.id)
    ])
      .then((result) => {
        this.setState({
          restaurantObj: result[0].data
        })
        console.log(result[0].data);
      })
          

        return (
          <React.Fragment>

            
         

            <h1>{this.state.restaurantObj.name}</h1>

            <div className="resturantBody">
            <hr/>
              <div className="resturantImgDiv">
                <img src= {require('../../images/background.jpg')} className='img-fluid' />
              </div>
              <p>{this.state.restaurantObj.description}</p><br></br>
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