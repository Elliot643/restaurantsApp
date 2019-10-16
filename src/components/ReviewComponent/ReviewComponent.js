import React from 'react';
import './ReviewComponent.css';
import MapComponent from "../MapComponent/MapComponent"


const ReviewComponent = (props) => {

    return (
        
        <div className='reviewContainer'>
            <div className='reviewBody'>
                <h1>This is the review Component</h1>
                <h2><MapComponent address="Klostergatan 6, Växjö"/></h2>
            </div>
        </div>
             
    )
};

export default ReviewComponent