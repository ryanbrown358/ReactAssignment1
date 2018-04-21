import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutPut from './UserOutput/UserOutPut';
import './App.css';

class App extends Component {

  state = {
    users: [
      {name: "Ryan"},
      {name: "Candace"},
      {name: "Anthony"}
    ]
  }

  newUserHandler = (event) => {
    this.setState({
      users: [
        {name: event.target.value},
        {name: "Candace"},
        {name: "Anthony"}
      ]
    })
  }

  render() {

    const inputStyle = {
      backgroundColor: "grey",
      border: "2px solid black",
      padding: "10px",
      cursor: "pointer"
    }

    return (
      <div className="App">


      <UserOutPut userName={this.state.users[0].name}/>

      <UserOutPut userName={this.state.users[1].name}/>
      <UserOutPut userName={this.state.users[2].name}/>
{/*       
      this here is calling the newUserHandler to change the first value of the name in the users array */}
        <UserInput  NameChanger={this.newUserHandler}/>

      </div>
    );
  }
}

export default App;
