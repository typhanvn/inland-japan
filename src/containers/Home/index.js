import React, { Component, Fragment } from 'react';
import Banner from '../../components/Banner';
import FeaturedProduct from '../../components/FeaturedProduct';
import LatestNews from '../../components/LatestNews';
import LatestProduct from '../../components/LatestProduct';
import OfferBanner from '../../components/OfferBanner';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <OfferBanner />
        <LatestProduct />
        <FeaturedProduct />
        <LatestNews />
      </Fragment>
    );
  }
}
export default Home;
