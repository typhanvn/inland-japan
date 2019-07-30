import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductList from '../Product/product-list';

export default class Product extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/san-pham" component={ProductList} />
        <Route path="/san-pham/:name" component={ProductList} />
        <Redirect to="/404" />
      </Switch>
    );
  }
}
