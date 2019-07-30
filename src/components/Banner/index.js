import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../components/Banner/style.css';
import * as bannerActions from './../../actions/banner';

class Banner extends Component {
  componentDidMount() {
    const { bannerActionCreators } = this.props;
    const { fetchListBannerRequest } = bannerActionCreators;
    fetchListBannerRequest();
  }
  render() {
    const { listBanner } = this.props;
    const divStyle = src => ({
      backgroundImage: 'url(' + src + ')',
    });

    return (
      <section className="slider pt-0">
        <OwlCarousel
          className="owl-theme"
          items={1}
          loop
          margin={10}
          key={listBanner.length}
        >
          {listBanner.map((item, index) => {
            return (
              <div
                key={index}
                className="slider-area"
                style={divStyle(item.url)}
              />
            );
          })}
        </OwlCarousel>
      </section>
    );
  }
}

Banner.propTypes = {
  bannerActionCreators: PropTypes.shape({
    fetchListBannerRequest: PropTypes.func,
  }),
  listBanner: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listBanner: state.banners.listBanner,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    bannerActionCreators: bindActionCreators(bannerActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Banner);
