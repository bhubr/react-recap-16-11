import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard';
import './App.css';
import UserList from './UserList';

class App extends Component {
  state = {
    userList: [],
  };

  // https://api.github.com/users
  personList = () => {
    axios
      .get('https://api.github.com/users')
      .then((response) => response.data)
      .then((data) => this.setState({
        userList : data
      }));
  };

  render() {
    const {userList} = this.state;
    return (
      <div className="App">
        <UserList userList={userList} />
        <button type="button" onClick={this.personList}>
          PersonList
        </button>
      </div>
    );
  }
}
export default App;
