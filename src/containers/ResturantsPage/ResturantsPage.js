import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import MapComponent from '../../components/MapComponent/MapComponent';
import { Link } from 'react-router-dom';


class ResturantsPage extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      resturantsArray: [],
      reviewsArray:[],
      error : null
    }
}
  
  componentDidMount() {
    Promise.all([
      axios.get('https://restaurantbackend-apis.herokuapp.com/restaurant/getAll'),
      axios.get('https://restaurantbackend-apis.herokuapp.com/review/getAll'),

    ])
   .then(([res1, res2]) => {
     this.setState({
      resturantsArray: res1.data,
      reviewsArray:res2.data
    })
   })
}
    render() {

        const classes = makeStyles(theme => ({
            icon: {
              marginRight: theme.spacing(2),
            },
            heroContent: {
              backgroundColor: theme.palette.background.paper,
              padding: theme.spacing(8, 0, 6),
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
              height: '10%',
              marginTop: '10%',
              display: 'flex',
              flexDirection: 'column',
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
          
         

          const reviews = this.state.reviewsArray

          const cards = this.state.resturantsArray 
          .map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                  <Typography>
                    Address :{card.address}
                  </Typography>
                  <Typography>

                 
                    {reviews.map(rev =>(
                 <div>
                  <b>{rev.restaurantID === card.id ? rev.text : ""}</b> 
               </div>
                    )
                  
                    )}
                  </Typography>
                  <div className="mapDiv">
                <MapComponent address="Klostergatan 6, Växjö" />
                </div>
                </CardContent>
                <CardActions>
                <Link to= {{ pathname: '/resturant/' + card.id, state: { foo: "bar"} }} className="btn btn-primary">View</Link>
                </CardActions>
              </Card>
            </Grid>
          ))
        return (
          <React.Fragment>

  
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            </Typography>
          
 
          </Container>
            <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards}
            </Grid>

          </Container>       
           </React.Fragment>  
        )
    }
}
export default ResturantsPage;