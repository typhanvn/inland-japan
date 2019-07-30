import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewsList from '../News/list-news';

export default class Product extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/tin-tuc" component={NewsList} />
        <Route path="/tin-tuc/:name" component={NewsList} />
        <Redirect to="/404" />
      </Switch>
    );
  }
}
