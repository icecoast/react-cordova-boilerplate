import React, { Component } from 'react';
import { Router, Route, hashHistory as history } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './login';
import TodoApp from './todo-app';

class AppRouteComponent extends Component {
  componentWillMount() {
    this.checkAuth = this.checkAuth.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);

    this._authenticated = true;
    this._isCheckingInitialLogIn = true;
    this._shouldRouterUpdate = true;
  }
  componentDidMount() {
    this.checkIfToStopAppRouterRenders();
  }
  shouldComponentUpdate(nextProps) {
    // Each time props are about to update - switch url if needed
    this._authenticated = true;
    if (this.props.credentials.authenticated !== this._authenticated) {
      history.push('/');
    }
    return this._shouldRouterUpdate;
  }
  componentDidUpdate() {
    this.checkIfToStopAppRouterRenders();
  }
  checkIfToStopAppRouterRenders() {
    // After done checking and flushed to dom , do not update again
    if (!this._isCheckingInitialLogIn) {
      this._shouldRouterUpdate = false;
    }
  }
  checkAuth(nextState, replace) {
    if (!this._authenticated) {
      replace('/login');
    }
  }
  handleRedirect(nextState, replace) {
    replace(this._authenticated ? '/main' : '/login');
  }

  render() {
    if (this._isCheckingInitialLogIn) {
      return (<Login />);
    }

    return (
      <Router history={history}>
        <Route path="/main" component={TodoApp} onEnter={this.checkAuth} />
        <Route path="/login" component={Login} />
        <Route path="*" onEnter={this.handleRedirect} />
      </Router>
    );
  }
}

AppRouteComponent.propTypes = {
  credentials: Login.PropTypes.credentials.isRequired
};

export default AppRouteComponent;
