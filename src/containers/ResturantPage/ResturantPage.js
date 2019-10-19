import React from 'react';
import MapComponent from '../../components/MapComponent/MapComponent';
import axios from 'axios';
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
        console.log(result[0].data);
      })

    this.state = {
      restaurantObj: ""
    }

}


  render() {
          

        return (
          <React.Fragment>
            <h1>{this.state.restaurantObj.name}</h1>

            <div className="resturantBody">
            <hr/>
              <div className="resturantImgDiv">
                <img src= {require('../../images/background.jpg')} className='img-fluid' />
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