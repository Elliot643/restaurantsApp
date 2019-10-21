import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


import Button from '@material-ui/core/Button';
import './UserPage.css';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent'



class Reviewer extends React.Component {


    constructor(props) {
        super(props);
        this.userid = sessionStorage.userID;

        this.state = {
            userArray: [],
            reviewArray: [],
            // id: 1,
            error: null
        }
    }

    componentDidMount() {
        Promise.all([
            axios.get('https://restaurantbackend-apis.herokuapp.com/user/id/' + this.userid),
            axios.get('https://restaurantbackend-apis.herokuapp.com/review/user_id/' + this.userid)
        ])
            .then(([res1, res2]) => {
                this.setState({
                    userArray: res1.data,
                    reviewArray: res2.data
                })
            })
    }


    render() {
        console.log( this.state.reviewArray)



        const useStyles = makeStyles(theme => ({
            button: {
                margin: theme.spacing(1),
            }
        }));


        const review = this.state.reviewArray.map(review => (
            <ReviewComponent
                reviewer={review.reviewer}
                text={review.text}
                resturant_name={review.restaurantName}
                rating={review.rating.$numberDecimal}
            />
        ))


        return (
            <div>
                <Link to="/UserUpdatePage">
                    <Button renderAs="button" variant="contained" color="primary" className={useStyles.button}>
                        <span>Update user</span>
                    </Button>
                </Link><br></br>


                <Grid item xs={3} >
                    <Container maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {review}
                        </Grid>
                    </Container>
                </Grid>
            </div>
        );
    }

}
export default Reviewer;
