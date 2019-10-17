import React from 'react';
import './RestaurantCard.css';


const RestaurantCard = (props) => {

    return (
        <div className="card">
            <hr />
            <div className="cardHead">
                <h2>{props.resturant_name}</h2>        
                <p>Rating : {props.Reviewrating}</p>
                <p>Address :{props.address}</p>
            </div>
            <hr />

            <img src= {require('../../images/background.jpg')} className='img-fluid' />
            <div className="cardBody">
                Card body here!
                <p>{props.rating}</p>
            </div>
        </div>        
    )
};

export default RestaurantCard