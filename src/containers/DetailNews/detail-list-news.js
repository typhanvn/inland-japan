import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsActions from '../../actions/news';

class DetailListNews extends Component {
  componentDidMount() {
    const { newsActionCreators } = this.props;
    const { fetchListNewsRequest } = newsActionCreators;
    fetchListNewsRequest();
  }
  render() {
    const { listNews } = this.props;
    let xhtml = null;
    if (listNews) {
      xhtml = (
        <section className="blog_detail-inner-section pt_large pb_large">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-12">
                <div className="blog-info">
                  <div className="news-details">
                    <h4>{listNews.title}</h4>
                    <p className="comments pb-0">
                      Đăng bởi <i>admin</i> - {listNews.date}
                    </p>
                  </div>
                  <div className="blo-detail-text content-editor">{listNews.description}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    return xhtml;
  }
}

DetailListNews.propTypes = {
  newsActionCreators: PropTypes.shape({
    fetchListNewsRequest: PropTypes.func,
  }),
  listNews: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.name);
  return {
    listNews: state.news.listNews.find(
      detailNews => detailNews.slug === ownProps.match.params.name,
    ),
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
)(DetailListNews);
