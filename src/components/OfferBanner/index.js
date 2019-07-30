import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as producCatActions from '../../actions/product_cat';

class OfferBanner extends Component {
  componentDidMount() {
    const { productCatActionCreators } = this.props;
    const { fetchListProductCatRequest } = productCatActionCreators;
    fetchListProductCatRequest();
  }

  render() {
    const { listProductCat } = this.props;
    return (
      <section className="offer-banners mt-0 pt-0">
        <div className="container">
          <div className="row justify-content-center">
            {listProductCat.slice(0, 6).map((item, index) => {
              return (
                <div className="col-sm-4 text-center mt-5" key={index}>
                  <Link to={`/san-pham/${item.slug}`} className="offer-banner same-hover">
                    <img src={item.image} alt={item.title} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

OfferBanner.propTypes = {
  productCatActionCreators: PropTypes.shape({
    fetchListProductCatRequest: PropTypes.func,
  }),
  listProductCat: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listProductCat: state.product_cats.listProductCat,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    productCatActionCreators: bindActionCreators(producCatActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfferBanner);
