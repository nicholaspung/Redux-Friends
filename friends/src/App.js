import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { connect } from 'react-redux';
import FriendPage from './components/FriendPage';
import PrivateRoute from './components/PrivateRoute';

function App(props) {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={FriendPage}/>
    </div>
  );
}

const mapStateToProps = ({ loggedIn }) => {
  return {
    loggedIn
  }
}

export default connect(mapStateToProps, {})(App);
