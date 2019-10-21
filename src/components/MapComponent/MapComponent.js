import React from "react";
import './MapComponent.css';

const MapComponent = (props) => {
    let address = props.address;
    return(

        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe id="gmap_canvas" title="myFrame"
                    src={"https://maps.google.com/maps?q="+address+"=&z=15&ie=UTF8&iwloc=&output=embed"} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
                <a href="https://usave.co.uk"  id="anchorId"></a>
            </div>
        </div>
    )
}

export default MapComponent
