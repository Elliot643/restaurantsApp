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
      restaurantObj: [],
      id: 2,
      address:  "Klostergatan 6, Växjö",   
      error : null
    }

    this.handleClick = this.handleClick.bind(this);
}

  handleClick(button) {
    console.log(this.state.id);
  }







  //Fetching data from the API endpoint.
  componentDidMount() {
    Promise.all([
      axios.get('https://restaurantbackend-apis.herokuapp.com/restaurant/id/' + this.state.id)
    ])
      .then((result) => {
        this.setState({
          restaurantObj: result[0].data
        })
        console.log(result[0].data);
      })
  }


  render() {
    
    const handleBtnClick = () => this.handleClick();

    const cards = this.state.resturantArray.map(value => (
      <RestaurantCard
          resturant_name = {value.name}
          reviewer = {value.reviewer}
          Reviewrating = {value.rating}
          address = {value.address}
          />
      ));
          

        return (
          <React.Fragment>

            <button onClick={handleBtnClick}>Get id from click</button>
         

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