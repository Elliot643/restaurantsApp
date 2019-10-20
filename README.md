This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


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
      reviewsArray: [],
      error: null
    }
  }

  componentDidMount() {
    Promise.all([
      axios.get('https://restaurantbackend-apis.herokuapp.com/restaurant/getAll'),
      axios.get('https://restaurantbackend-apis.herokuapp.com/review/getAll'),

    ])
<
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
                <MapComponent address={card.address} />

    
                </div>
                </CardContent>
                <CardActions>
                <Link to= {{ pathname: '/resturant/' + card.id }} className="btn btn-primary">View</Link>
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