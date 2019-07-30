import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/product';
import * as productCatActions from '../../actions/product_cat';
import BannerDetail from '../../components/BannerDetail';

class ProductList extends Component {
  componentDidMount() {
    const { productActionCreators, productCatActionCreators } = this.props;
    const { fetchListProductRequest } = productActionCreators;
    const { fetchListProductCatRequest } = productCatActionCreators;
    fetchListProductRequest();
    fetchListProductCatRequest();
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
    if (products.length > 0) {
      result = products.map((item, index) => {
        return (
          <div className="col-md-3 col-6 item-product" key={index}>
            <div className="product-box common-cart-box box-1">
              <div className="product-img common-cart-img">
                <Link to={`/chi-tiet-san-pham/${item.slug}`}>
                  {/* <div className="flag-sold">Đã bán</div> */}
                  <img src={item.image} alt={item.title} />
                </Link>
              </div>

              <div className="product-info common-cart-info text-center">
                <Link to={`/chi-tiet-san-pham/${item.slug}`} className="cart-name">
                  {item.title}
                </Link>
                <p className="cart-price">
                  <del>{this.addCommas(item.price)}đ</del>
                  {this.addCommas(item.price - 200000)}đ
                </p>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  }

  render() {
    const { listProduct, listCatProduct, match } = this.props;

    return (
      <Fragment>
        <BannerDetail match={match} name={`Sản Phẩm`} />
        <section className="shop-inner-section pt_large pb_large">
          <div className="container">
            <div className="shop-options d-sm-flex justify-content-between align-items-center">
              <div className="showing-items">
                <p>
                  Hiển thị 1–{listProduct.length} / {listProduct.length} kết quả
                </p>
              </div>
              <div className="shop-list_grid">
                <div className="list_grid-btns">
                  <Link to="a" className="grid-view on">
                    <i className="ion-grid" />
                  </Link>
                  <Link to="a" className="list-view">
                    <i className="ion-navicon-round" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row list_grid_container grid">
              {listCatProduct
                ? listProduct.map((item, index) => {
                    if (item.id_cat === listCatProduct.id) {
                      return (
                        <div
                          className="col-md-3 col-6 item-product"
                          key={index}
                        >
                          <div className="product-box common-cart-box box-1">
                            <div className="product-img common-cart-img">
                              <Link to={`/chi-tiet-san-pham/${item.slug}`}>
                                {/* <div className="flag-sold">Đã bán</div> */}
                                <img src={item.image} alt={item.title} />
                              </Link>
                            </div>

                            <div className="product-info common-cart-info text-center">
                              <Link to={`/chi-tiet-san-pham/${item.slug}`} className="cart-name">
                                {item.title}
                              </Link>
                              <p className="cart-price">
                                <del>{this.addCommas(item.price)}đ</del>
                                {this.addCommas(item.price - 200000)}đ
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return false;
                  })
                : this.showProducts(listProduct)}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

ProductList.propTypes = {
  productActionCreators: PropTypes.shape({
    fetchListProductRequest: PropTypes.func,
  }),
  productCatActionCreators: PropTypes.shape({
    fetchListProductCatRequest: PropTypes.func,
  }),
  listProduct: PropTypes.array,
  listCatProduct: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  return {
    listProduct: state.products.listProduct,
    listCatProduct: state.product_cats.listProductCat.find(
      cat_name => cat_name.slug === ownProps.match.params.name,
    ),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
    productCatActionCreators: bindActionCreators(productCatActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
