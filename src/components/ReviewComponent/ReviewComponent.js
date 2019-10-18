import React from 'react';
import './ReviewComponent.css';
import MapComponent from "../MapComponent/MapComponent"


const ReviewComponent = (props) => {

    return (
        
        <div className='reviewContainer'>
            <div className='reviewBody'>
               
               {/* Name: {props.name} */}
               {/* Text: {props.text} */}

                <div className="textAndNameWrapper">
                    <div className="nameDiv">
                        <p>{props.reviwer}</p>
                    </div>
                    <div className="ratingDiv">
                        <p>Rating</p>
                    </div>
                </div> 

                <div className="textDiv">
                    <p>{props.text}</p>
                </div>

            </div>
        </div>
             
    )
};

export default ReviewComponent