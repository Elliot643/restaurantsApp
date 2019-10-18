import React from 'react';
import './RestaurantCard.css';


const RestaurantCard = (props) => {

    return (
        <div className="card">
            <hr />
            <div className="cardHead">
                <h2>{props.resturant_name}</h2> 
                <p>Address :{props.address}</p>       
            </div>
            <img src= {require('../../images/background.jpg')} className='img-fluid' />
            <hr />
            <div className="cardBody">
                <p>Rating : {props.Reviewrating}</p>
            </div>
        </div>        
    )
};

export default RestaurantCard


{/* 
resturant_name = {value.name}
            reviewer = {value.reviewer}
            Reviewrating = {value.rating}
            address = {value.address}
*/}