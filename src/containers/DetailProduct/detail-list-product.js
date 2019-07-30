import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/product';

class DetailListProduct extends Component {
  componentDidMount() {
    const { productActionCreators } = this.props;
    const { fetchListProductRequest } = productActionCreators;
    fetchListProductRequest();
  }

  addCommas = nStr => {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1,$2');
    }
    return x1 + x2;
  };

  showProducts(products) {
    let result = null;
    const { match } = this.props;
    if (products.length) {
      result = products.map((product, index) => {
        return (
          <div>
            {product.slug === match.params.name ? (
              <section className="products-detail-section pt_large" key={index}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="col-md-7">
                      <div className="quickview-product-detail">
                        <h2>{product.title}</h2>
                        <h3 className="box-price">
                          <del>{this.addCommas(product.price)}đ</del>
                          {this.addCommas(product.price - 200000)}đ
                        </h3>
                        <div className="box-text content-editor short-content">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              ''
            )}
          </div>
        );
      });
    }
    return result;
  }

  render() {
    const { listProduct } = this.props;
    return <div>{this.showProducts(listProduct)}</div>;
  }
}

DetailListProduct.propTypes = {
  productActionCreators: PropTypes.shape({
    fetchListProductRequest: PropTypes.func,
  }),
  listProduct: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listProduct: state.products.listProduct,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailListProduct);
