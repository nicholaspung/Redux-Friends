import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { connect } from 'react-redux';
import FriendPage from './components/FriendPage';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import AddFriend from './components/AddFriend';

function App(props) {
  return (
    <div className="App">
      {!props.loggedIn ? <Link to="/">Home</Link> : <Link to="/friends">Home</Link>}
      {!props.loggedIn && <Link to="/login">Login</Link>}
      {props.loggedIn && <Link to="/addfriend">Add Friend</Link>}
      {props.loggedIn && <Link to='/logout'>Logout</Link>}

      {!props.loggedIn && <Route path="/login" component={Login} />}
      {props.loggedIn && <Route path="/addfriend" component={AddFriend} />}
      {props.loggedIn && <Route path="/logout" component={Logout} />}
      <PrivateRoute exact path="/friends" component={FriendPage}/>
    </div>
  );
}

const mapStateToProps = ({ loggedIn }) => {
  return {
    loggedIn
  }
}

export default connect(mapStateToProps, {})(App);
