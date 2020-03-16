import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    data: [],
    firstName: "",
    lastName:"",
  }

  componentDidMount = () => {
    fetch("http://api.icndb.com/jokes/random")
    .then( response => response.json())
    .then (json => this.setState({data:[json]}))
  }

  getJoke = () => {
    if (this.state.firstName !== "" && this.state.lastName !== "")
    fetch(`http://api.icndb.com/jokes/random?firstName=${this.state.firstName} && lastName=${this.state.lastName}`)
    .then( response => response.json())
    .then (json => this.setState({data:[json]}))

  else {
      fetch("http://api.icndb.com/jokes/random")
      .then( response => response.json())
      .then (json => this.setState({data:[json]}))

  }
  }

  getFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  getLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }


  render () {
    const {data} = this.state
    const getNew = data.map ((data, index)=> {
      return <p className = "joke" key = {index}>{data.value.joke}</p>
    })

  return (
    <div className="App">
    <h1 className = "heading">Random Joke Generator</h1>
      {getNew}
    <button onClick = {this.getJoke}>Show Joke</button>
    <div className = "inputs">
    <h2>Change Name</h2>
    <input className = "inputboxes" placeholder = "Firstname" type = "text" onChange = {this.getFirstName} ></input>
    <input className = "inputboxes" placeholder = "Lastname"  type = "text" onChange = {this.getLastName}></input>
    </div>
    </div>
  );
}
}


export default App;