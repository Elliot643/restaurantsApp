import React from 'react';
import axios from 'axios';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import './LandingPage.css';




class LandingPage extends React.Component {
    

    constructor(props) {
      super(props);

      this.state = {
        resturantArray: [],
        reviewsArray:[],
        error : null

      }
  }


      componentDidMount() {
        Promise.all([
          axios.get('https://restaurantbackend-apis.herokuapp.com/restaurant/getAll'),
          axios.get('https://restaurantbackend-apis.herokuapp.com/review/latest')
        ])
       .then(([res1, res2]) => {
         this.setState({
          resturantArray: res1.data,
          reviewsArray :  res2.data
        })
       })

        // axios.get('https://restaurantbackend-apis.herokuapp.com/restaurant/getAll')
        //   .then(result =>{
        //     console.log(result.data)
        //     this.setState({
        //       resturantArray: result.data,
        //     })
        //   }).catch(error => this.setState({
        //     error,
        //   }));
    }


    render() {
      const { hits} = this.state;
        
      const review = this.state.reviewsArray.map(review =>(
        <ReviewComponent 
          reviewer  ={review.reviewer}
          text = {review.text}
          resturant_name = {review.restaurantName}
          rating = {review.rating}
        />
      ))
      

      const cards = this.state.resturantArray.map(value => (
        <RestaurantCard
            resturant_name = {value.name}
            reviewer = {value.reviewer}
            Reviewrating = {value.rating}
            address = {value.address}
            
        />
    ));
        //Here we call on the varibiles that contains the components and puts them in a div.
        return (
        <React.Fragment>
        <h1 className="LandingPageTitle">Home Page</h1>
       
        <div className="wrapper">

        <div className="reviewDiv">
                {review}
              </div>

          <div className="cardsDiv">
          {/* <h3>Top 5 Resturants</h3> */}
            <div className="cardGrid">
              {cards}
            </div>
          </div>

        </div>
      </React.Fragment>
        )
    }
}

export default LandingPage;