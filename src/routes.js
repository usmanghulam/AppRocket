import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// all components
import SignUp from './components/users/signUp';
import Login from './components/users/login';
import Chatroom from './components/chatroom/container/index'

class routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={()=>{
          let loginUser = localStorage.getItem('appRocket');
          let user = JSON.parse(loginUser);
          return user && user.email && user.password ? <Chatroom/> : <SignUp/>
        }}/>
        <Route path="/login" component={Login}/>
      </div>
    );
  }
}

export default withRouter(routes);