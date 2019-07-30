import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DetailListNews from '../DetailNews/detail-list-news';

export default class DetailNews extends Component {
  render() {
    return (
      <Switch>
        <Route path="/chi-tiet-tin-tuc/:name" component={DetailListNews} />
        <Redirect to="/404" />
      </Switch>
    );
  }
}
