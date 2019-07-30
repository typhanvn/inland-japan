import React, { Component } from 'react';
import AllNews from '../AllNews';

class LatestNews extends Component {
  render() {
    return (
      <section className="news-section pb_large">
        <div className="container">
          <div className="title text-center">
            <h4>Tin tức mới nhất</h4>
          </div>
          <AllNews />
        </div>
      </section>
    );
  }
}

export default LatestNews;
