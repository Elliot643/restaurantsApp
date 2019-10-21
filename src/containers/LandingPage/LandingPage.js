import React from 'react';
import axios from 'axios';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './LandingPage.css';
import CookieConsent from "react-cookie-consent";  



class LandingPage extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
      resturantArray: [],
      reviewsArray: [],
      error: null

    }
  }


  componentDidMount() {
    Promise.all([
      axios.get('https://restaurantbackend-apis.herokuapp.com/restaurant/getAll'),
      axios.get('https://restaurantbackend-apis.herokuapp.com/review/latest')
    ])
      .then(([res1, res2]) => {
        this.setState({
          resturantArray: res1.data,
          reviewsArray: res2.data
        })
      })

  }


  render() {
    console.log(this.props.roleid)
    const review = this.state.reviewsArray.map(review => (
      <ReviewComponent
        reviewer={review.reviewer}
        text={review.text}
        resturant_name={review.restaurantName}
        rating={review.rating.$numberDecimal}
      />
    ))

    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1,
        marginTop: theme.spacing(5),

      },
      icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        marginTop: theme.spacing(5),

      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        marginTop: theme.spacing(10),
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: "18rem",
        marginTop: '10%',
        flexDirection: 'column',
        width:" 18rem;"
      },
      body: {
        paddingTop: theme.spacing(4),
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
    }));


    const cards = this.state.resturantArray
      .map(card => (
        <Grid item key={card} xs={12} sm={6} md={4} >
          <RestaurantCard
            name = {card.name}
            address ={card.address}
            id={card.id}
          />
        </Grid>
      ))

    //Here we call on the varibiles that contains the components and puts them in a div.
    return (
      <React.Fragment>
          <div>
         
            <br></br>
            <br></br>
          </div>
      <CookieConsent
          location="bottom"
          buttonText="Great thanks"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={50}
        >
          Hey Craig! No we are not using cookies if you are wondering!! 
        </CookieConsent>
        <div className={classes.root}>
          <Grid className={classes.body} container spacing={3}>

            <Grid item xs={3} >
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {review}
                </Grid>
              </Container>
            </Grid>
            <Grid item xs={9}>
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {cards}
                </Grid>
              </Container>
            </Grid>

          </Grid>


        </div>



      </React.Fragment>
    )
  }
}

export default LandingPage;