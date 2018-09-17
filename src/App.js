import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import TrackList from "./components/TrackList";

class App extends Component {
  // default state object
  state = {
    tracks: []
  };

  componentDidMount() {
    axios
      .get("http://tracks:8000/alltracks")
      .then(response => {
        // create an array of tracks only with relevant data
        const newTracks = response.data.map(c => {
          return {
            id: c.id,
            title: c.title
          };
        });

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          tracks: newTracks
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tracks Listing</h1>
        </header>

        <TrackList tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
