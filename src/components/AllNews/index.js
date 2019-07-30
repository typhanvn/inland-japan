import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsActions from '../../actions/news';

class AllNews extends Component {
  componentDidMount() {
    const { newsActionCreators } = this.props;
    const { fetchListNewsRequest } = newsActionCreators;
    fetchListNewsRequest();
  }
  render() {
    const { listNews } = this.props;
    return (
      <div className="row">
        {listNews.map((item, index) => {
          return (
            <div className="col-lg-4 col-sm-6 mb-5" key={index}>
              <div className="news-box box-1">
                <div className="news-img">
                  <Link to={`chi-tiet-tin-tuc/${item.slug}`}>
                    <img src={item.image} alt={item.title} />
                  </Link>
                  <div className="date-box text-center text-uppercase">
                    <h5>
                      {item.date.substr(0, 2)} <br />
                      {item.date.substr(3)}
                    </h5>
                  </div>
                </div>
                <div className="news-info text-center">
                  <h5>
                    <Link to={`chi-tiet-tin-tuc/${item.slug}`}>{item.title}</Link>
                  </h5>
                  <Link to={`chi-tiet-tin-tuc/${item.slug}`} className="read-more mt-3">
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
AllNews.propTypes = {
  newsActionCreators: PropTypes.shape({
    fetchListNewsRequest: PropTypes.func,
  }),
  listNews: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listNews: state.news.listNews,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newsActionCreators: bindActionCreators(newsActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllNews);
