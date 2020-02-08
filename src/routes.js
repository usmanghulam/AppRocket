import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// all components
import SignUp from './components/users/signUp';
import Login from './components/users/login';
import Chatroom from './components/chatroom/container';
import MainPage from './components/main';

class routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={Login}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/home" component={Chatroom}/>
      </div>
    );
  }
}

export default withRouter(routes);