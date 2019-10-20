import React from 'react';

import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class AddResturantPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      category: "",
      description: "",
      user_id : ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleOptionChange = changeEvent => {
    this.setState({
      role: changeEvent.target.value
    });
  }

  handleSubmit(event) {

    axios.post('https://restaurantbackend-apis.herokuapp.com/restaurant/create', {
      name: this.state.name,
      address: this.state.address,
      category: this.state.category,
      description: this.state.description,
      user_id : sessionStorage.userID

    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });

    event.preventDefault();
  }



  render() {


    const classes = makeStyles(theme => ({
      '@global': {
        body: {
          backgroundColor: theme.palette.common.white,
        },
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));



    return (



      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

          <Typography component="h1" variant="h5">
            Add Restaurant
        </Typography>
          <form onSubmit={this.handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField onChange={this.handleChange}
                  required
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={this.handleChange}
                  required
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField onChange={this.handleChange}
                  required
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={this.handleChange}
                  required
                  variant="outlined"
                  required
                  fullWidth
                  name="category"
                  label="Categories"
                  type="text"
                  id="category"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              value="submit"
              className={classes.submit}
            >
              Add
          </Button>

          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    );
  }
}
export default AddResturantPage;