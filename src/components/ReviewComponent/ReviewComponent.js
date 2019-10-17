import React from 'react';
import './ReviewComponent.css';
import MapComponent from "../MapComponent/MapComponent"


const ReviewComponent = (props) => {

    return (
        
        <div className='reviewContainer'>
            <div className='reviewBody'>
                <hr />
                <h2>Review component body</h2>                        
                        
                <p>text :{props.text}</p>
                <hr />
            </div>
        </div>
             
    )
};

export default ReviewComponent