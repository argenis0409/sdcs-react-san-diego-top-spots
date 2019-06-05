import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='jumbotron'>
            <h1>San Diego Top Spots</h1>
            <p>A list of the top 30 places to see in San Diego, California.</p>
          </div>
          {this.state.topspots.map(topspots => (
            <TopSpot
              key={topspots.id}
              name={topspots.name}
              description={topspots.description}
              location={topspots.location}
            />
          ))
          }
        </div>
      </div>
    );
  }
}


export default App;