import React from 'react';
import './ReviewComponent.css';


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
                        <p>Ratins : {props.rating}</p>
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