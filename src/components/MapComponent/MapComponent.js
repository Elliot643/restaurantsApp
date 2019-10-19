import React from "react";
import './MapComponent.css';

const MapComponent = (props) => {
    //let address = "Klostergatan 6, Växjö";
    let address = props.address;
    return(

        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe id="gmap_canvas" title="myFrame"
                    src={"https://maps.google.com/maps?q="+address+"=&z=15&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                <a href="https://usave.co.uk" id="anchorId"></a>
            </div>
        </div>
    )
}

export default MapComponent
