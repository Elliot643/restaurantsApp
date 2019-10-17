import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import MapComponent from '../../components/MapComponent/MapComponent';
import './ResturantPage.css';


class ResturantPage extends React.Component {
    render() {

      
        return (

          <React.Fragment>
            <h1>Resturant Name here ?</h1>

            <div className="resturantBody">
            <hr/>
              <div className="resturantImgDiv">
                <img src= {require('../../images/background.jpg')} className='img-fluid' />
              </div>
              <p>
                I motsättning till vad många tror,
                är inte Lorem Ipsum slumpvisa ord.
                Det har sina rötter i ett stycke klassiskt litteratur på
                latin från 45 år före år 0, och är alltså över 2000 år gammalt.
                Richard McClintock, en professor i latin på Hampden-Sydney College
                i Virginia, översatte ett av de mer ovanliga orden, consectetur,
                från ett stycke Lorem Ipsum och fann dess ursprung genom att studera
                användningen av dessa ord i klassisk litteratur. Lorem Ipsum kommer
                från styckena 1.10.32 och 1.10.33 av "de Finibus Bonorum et Malorum"
                (Ytterligheterna av ont och gott) av Cicero, skriven 45 före år 0. Boken är en
                avhandling i teorier om etik, och var väldigt populär under renäsanssen. Den
                inledande meningen i Lorem Ipsum, "Lorem Ipsum dolor sit amet...", kommer från
                stycke 1.10.32.
                  </p><br></br>
                  <hr/>
              <div className="mapDiv">
                <MapComponent address="Klostergatan 6, Växjö" />
              </div>
              <hr/>
            </div>
          </React.Fragment>
        )
    }
}
export default ResturantPage;