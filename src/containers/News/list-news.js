import React, { Component, Fragment } from 'react';
import AllNews from '../../components/AllNews';
import BannerDetail from '../../components/BannerDetail';

export default class NewsList extends Component {
  render() {
    const {match} = this.props;
    return (
      <Fragment>
        <BannerDetail match={match} name={`Tin tức`} />
        <section className="blog-inner-section pt_large pb_large">
          <div className="container">
            <div className="row blog_info">
              <AllNews />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
