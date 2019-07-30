import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DetailListProduct from '../DetailProduct/detail-list-product';

export default class Product extends Component {
  render() {
    return (
      <Switch>
        <Route path="/chi-tiet-san-pham/:name" component={DetailListProduct} />
        <Redirect to="/404" />
      </Switch>
    );
  }
}
