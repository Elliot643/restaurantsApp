import React from 'react';
import './RestaurantCard.css';


const RestaurantCard = (props) => {

    const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";


    return (
        
                    <div className='card'>
                        <div className='cardBody'>
                            <h1>{props.resturant_name}</h1>
                            <h5>By :{props.reviewer}</h5>
                              <p>Rating : {props.rating}</p>
                              <p>Address :{props.address}</p>
                        </div>
                        <div className='cardFooter'>
                        <img src={imgUrl} alt="#" width="100"/>
                        </div>
                    </div>
             
    )
};

export default RestaurantCard