import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


class SearchPage extends React.Component{
    constructor(props){
        super(props);

        const {keyword} = this.props.match.params;

        

        this.state={
            searchWord:keyword.toLowerCase(),
            restaurants: "",
        }

        Promise.all([
            axios.get("https://restaurantbackend-apis.herokuapp.com/restaurant/getAll")
        ])
        .then((result) => {

            let allRestaurants = result[0].data;
            var filteredRestaurants = [];

            for(let i=0;i<allRestaurants.length;i++){
                for(let x=0;x<allRestaurants[i].tags.length;x++){
                    if(allRestaurants[i].name.toLowerCase().includes(this.state.searchWord)||allRestaurants[i].tags[x].toLowerCase().includes(this.state.searchWord)){
                        filteredRestaurants.push(allRestaurants[i]);
                        i++;
                    }
                }
            }

            this.setState({
                restaurants: filteredRestaurants
            })
        })

    }
    render(){
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


        var output = [];
        for(let i=0;i<this.state.restaurants.length;i++){
            let card = this.state.restaurants[i];
            output.push(
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.name}
                        </Typography>
                        <Typography>
                            Description: {card.description}
                        </Typography>
                        <Typography>
                            Tags: {card.tags}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to= {{ pathname: '/resturant/' + card.id }} className="btn btn-primary">View</Link>
                    </CardActions>
                </Card>
            );
        }


        return(
            <React.Fragment>
                <h4>Results for "{this.state.searchWord}"</h4>
                <hr />
                {output}
            </React.Fragment>
        )
    }

}

export default SearchPage;