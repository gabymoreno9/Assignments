import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    sightings: [],
    individual: 1,
    location: '',
    health: ''
  }

  componentDidMount () {
    fetch('http://localhost:8888/sightings')
      .then(response => response.json())
      .then(data => this.setState({ sightings: data }))
  }

  // Event handlers
  handleChangeIndividual = event =>
    this.setState({ individual: event.target.value })

  handleChangeLocation = event =>
    this.setState({ location: event.target.value })
  
  handleChangeHealth = event =>
    this.setState({ health: event.target.value })

  handleSubmitForm = event => {
    event.preventDefault();
  
    let options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        individual_seen: this.state.individual,
        sighting_location: this.state.location,
        appeared_healthy: this.state.health
      })
    }
    fetch('http://localhost:8888/add-sighting', options)
    this.setState({ individual: 1, location: '', health: '' });
  }

  // Rendering
  render = () =>
    <div className="App">
      <header className="App-header">
        <h1>
          Animal Tracker App
        </h1>
        <p>
          All Sightings
        </p>
        {this.state.sightings.map(function(sighting, index) {
          return <li key={index}>
            Individual: {sighting.nickname} | 
            Location: {sighting.sighting_location} |
            Appeared Healthy: {sighting.appeared_healthy}
          </li>
        })}
        
        <p>
          Add a new Sighting Record
        </p>

        <form onSubmit={this.handleSubmitForm}>
          <label>Individual:</label>
          <input type="number" value={this.state.individual} onChange={this.handleChangeIndividual} />
          <br />

          <label>Location:</label>
          <input type="text" value={this.state.location} onChange={this.handleChangeLocation} />
          <br />

          <label>Appeared Healthy:</label>
          <input type="text" value={this.state.health} onChange={this.handleChangeHealth} />
          <br />

          <input type="submit" text="Add" />
        </form>
      
      </header>
    </div>
}

export default App;
