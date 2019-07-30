import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class BannerDetail extends Component {
  render() {
    const {match, name} = this.props;
    const divStyle = src => ({
      backgroundImage: 'url(' + src + ')',
    });
    return (
      <section className="breadcrumbs-section background_bg" style={divStyle('/assets/image/shop-breadcrumbs.jpg')}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page_title text-center">
                <h1>{name}</h1>
                <ul className="breadcrumb justify-content-center">
                  <li><Link to="/">Trang chủ</Link></li>
                  <li><span>{match.url}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
