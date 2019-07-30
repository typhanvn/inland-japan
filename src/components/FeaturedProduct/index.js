import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/product';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class FeaturedProduct extends Component {
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

  renderSlideProduct = () => {
    const sliders = {
      options: {
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
        },
      },
    };
    return sliders;
  };

  showProducts(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="product-box common-cart-box">
              <div className="product-img common-cart-img">
                <Link to={`san-pham/${item.slug}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
              </div>
              <div className="product-info common-cart-info text-center">
                <Link
                  to={`/san-pham/${`san-pham/${item.slug}`}`}
                  className="cart-name"
                >
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
    const { listProduct } = this.props;
    return (
      <section className="popular-products">
        <div className="container">
          <div className="title text-center">
            <h4>Sản phẩm nổi bật</h4>
          </div>
          <OwlCarousel
            className="owl-theme same-nav"
            key={listProduct.length}
            {...this.renderSlideProduct().options}
          >
            {listProduct.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="product-box common-cart-box">
                    <div className="product-img common-cart-img">
                      <Link to={`/chi-tiet-san-pham/${item.slug}`}>
                        <img src={item.image} alt={item.title} />
                      </Link>
                    </div>
                    <div className="product-info common-cart-info text-center">
                      <Link
                        to={`/chi-tiet-san-pham/${item.slug}`}
                        className="cart-name"
                      >
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
            })}
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

FeaturedProduct.propTypes = {
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
)(FeaturedProduct);
