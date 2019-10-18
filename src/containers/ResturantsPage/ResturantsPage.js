import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import Button from '@material-ui/core/Button';
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
              paddingTop: theme.spacing(8),
              paddingBottom: theme.spacing(8),
            },
            card: {
              height: '100%',
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
                  <Button to="/restaurant/:id" size="small" color="primary" value={card.id}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        return (
            <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards}
            </Grid>
          </Container>         
        )
    }
}
export default ResturantsPage;