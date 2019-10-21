import React from 'react';
import './RestaurantCard.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MapComponent from '../MapComponent/MapComponent';

const RestaurantCard = (props) => {
    let isReviewed ;
    if(!props.reviews){
        isReviewed=   <Card >
        <div class="item">
            <img src={"https://source.unsplash.com/random/"} alt="restaurant" className="img-fluid"></img>
        </div>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.name}
            </Typography>
            <Typography>
                {props.description}
              </Typography>
            <Typography>
                Address :{props.address}
            </Typography>
        </CardContent>
        <CardActions>
            <Button href={"/resturant/" + props.id} color="primary" variant="outlined">
                View
            </Button>
        </CardActions>

    </Card>
    }else{
        isReviewed=  <Card >
       
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.name}
            </Typography>
            <Grid container spacing={4} >
            <Grid md={4} >
            <div class="item">
            <img src={"https://source.unsplash.com/random/"} alt="restaurant" className="img-fluid"></img>
            </div>
            </Grid>
            <Grid md={4}>
            <Typography>
                {props.description}
              </Typography>
            <Typography>
                Address :{props.address}
            </Typography>
            
            <Typography>
                <h5>Reviews:</h5>
                {props.reviews.map(rev => (
                    <div>
                        <b>{rev.restaurantID === props.id ? <li> {rev.text} </li>: ""}</b>
                    </div>
                ))}
              </Typography>
            <MapComponent address={props.address} />
        
            </Grid>
            </Grid>
           </CardContent>
        <CardActions>
            <Button href={"/resturant/" + props.id} color="primary" variant="outlined">
                View
            </Button>
        </CardActions>

    </Card>
    }
    return (
        <div>
        {isReviewed}
        </div>
        

        
        
    )
};

export default RestaurantCard
