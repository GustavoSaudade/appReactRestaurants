import React, { Component } from 'react';
import axios from 'axios';
import AppBar from './components/AppBar';
import RestaurantsList from './components/RestaurantsList';
import './App.css';
import './bootstrap.css';

class App extends React.Component {
  state = {
    restaurants: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    const { isLoading, restaurants } = this.state;
    return (
      <React.Fragment>
        <AppBar />
        <div>
          {!isLoading ? (
            <div>
              <RestaurantsList rest={this.state.restaurants}/>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }

  getRestaurants() {
    let data = JSON.stringify({
      password: '',
      username: ''
    });
    // We're using axios instead of Fetch
    axios
      // The API we're requesting data from
      .get("http://localhost:3000/restaurants", data, {headers: 'Content-Type: application/json'})
      // Once we get a response, we'll map the API endpoints to our props
      .then(response =>
        response.data.Items.map(restaurant => ({
          id: `${restaurant.id}`,
          name: `${restaurant.name}`,
          type: `${restaurant.type}`,
          money_rate: `${restaurant.money_rate}`,
          star_rate: `${restaurant.star_rate}`
        }))
      )
      // Let's make sure to change the loading state to display the data
      .then(restaurants => { console.log(restaurants)
        this.setState({
          restaurants,
          isLoading: false
        });
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch(error => this.setState({ error, isLoading: false }));
  }
}

export default App;
