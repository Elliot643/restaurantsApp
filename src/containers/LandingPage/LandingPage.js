import React from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';




class LandingPage extends React.Component {
    
    state = {
         //Array for all the resturants.
     resturantArray : [
        {
          "resturant_name": "Cool Cat Palace",
          "rating": "4/5"
        },
        {
          "resturant_name": "The Eclipse",
          "rating": "2/5"
        },
        {
          "resturant_name": "The Paradise Docks",
          "rating": "1/5"
        },
        {
          "resturant_name": "Little Persia",
          "rating": "3/5"
        },
        {
          "resturant_name": "The Bitter Fish",
          "rating": "1/5"
        }
      ],
  
      //Array with all the user objects.
        userArray: [
        {
          "user_name": "Craig",
          "rating": "2/5",
          "review": "This was not so good food"
        },
        {
          "user_name": "Jasper",
          "rating": "3/5",
          "review": "It was okey i guess.."
        },
        {
          "user_name": "Maria",
          "rating": "1/5",
          "review": "wtf is this.."
        },
        {
          "user_name": "Simon",
          "rating": "1/5",
          "review": "nope.."
        },
        {
          "user_name": "PA",
          "rating": "1/5",
          "review": "I don't evey eat here.. =)"
        }
      ]
    };

    

    render() {

        //Navbar
        const navbar = <NavbarComponent />



        //Cards
        const cards = this.state.resturantArray.map(value => (
            <RestaurantCard
                resturant_name = {value.resturant_name}
                rating = {value.rating}
            />
        ));


        //Review
        const review = <ReviewComponent />


        //Here we call on the varibiles that contains the components and puts them in a div.
        return (
          <React.Fragment>
            {navbar}
            <br />
            <br />

            <h4>Resturant Landing Page</h4>
            <hr />

              <div className="reviewDiv">
                {review}
              </div>


            <div className="cardWrapper">
                {cards}
            </div>

       
          </React.Fragment>
        )
    }
}

export default LandingPage;