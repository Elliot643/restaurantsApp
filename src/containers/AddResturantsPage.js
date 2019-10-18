import React from 'react';
import axios from 'axios';

class AddNewRestuarantComponent extends React.Component {
    constructor(props) {
        super(props);
        this.userid = this.props.userid;

        this.state = {
            user_id: this.userid,
            name: '',
            address: '',
            description: '',
            category: ''
        }
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        // get our form data out of state
        const { name, address, description, category, user_id } = this.state;

        axios.post('https://restaurantbackend-apis.herokuapp.com/restaurant/create/', { name, address, description, category, user_id })
          .then((result) => {
            this.setState = {
                name: '',
                address: '',
                description: '',
                category: ''
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }

    render() {
        const { name, address, description, category } = this.state;

        return (
            <div className="tabDiv">
            <h2>Register a new restaurant:</h2>
                <hr></hr>
                <form className="reviewForm" onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Restaurant name:<br></br>
                            <input 
                                onChange={this.onChange} 
                                value={name}
                                id="name" 
                                type="text" 
                                name="name" 
                                placeholder="Japon Sushi" 
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Address:<br></br>
                            <input 
                                onChange={this.onChange} 
                                value={address}
                                id="address" 
                                type="text" 
                                name="address" 
                                placeholder="Karl Johans gate 2, 0112 Oslo"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Category:<br></br>
                            <input 
                                onChange={this.onChange} 
                                value={category}
                                id="category" 
                                type="text" 
                                name="category" 
                                placeholder="Fast food"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Description:<br></br>
                            <textarea 
                                onChange={this.onChange} 
                                value={description}
                                id="description" 
                                rows = "5" 
                                cols = "50" 
                                name = "description" 
                                placeholder="This is a restaurant that is well known for ..."
                            />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddNewRestuarantComponent