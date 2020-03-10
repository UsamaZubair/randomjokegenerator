import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json())
    .then (json => this.setState({data:json}))

  }

  render () {
    console.log("inside render")
    const {data} = this.state
  return (
    <div className="App">

     {data.map((data, index) => {
        return (
          <h1 key={index}>
            {data.name}
          </h1>)}
          )}

    </div>
  );
}
}

export default App;
