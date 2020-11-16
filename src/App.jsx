import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './UserList';

class App extends Component {
  state = {
    userList: [],
  };

  componentDidMount(){
    this.getPersonList();
  };

// https://api.github.com/users
  getPersonList = () => {
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
        <button type="button" onClick={this.getPersonList}>
          PersonList
        </button>
      </div>
    );
  }
}
export default App;
