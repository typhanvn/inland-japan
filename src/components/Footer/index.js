import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 order-md-last">
                <div className="footer-box box-4">
                  <h6 className="fb-title">Thông tin liên hệ</h6>
                  <div className="fb-iner">
                    <ul>
                      <li>
                        <i className="ion-ios-location-outline" />
                        <p>86/56 Phổ Quang, Phường 2, Tân Bình, TP.HCM</p>
                      </li>
                      <li className="mt-3">
                        <i className="ion-ios-telephone-outline" />
                        <p>099 648 6789</p>
                      </li>
                      <li className="mt-3">
                        <i className="ion-ios-telephone-outline" />
                        036 749 0000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-6">
                <div className="footer-box box-2">
                  <h6 className="fb-title">Danh mục sản phẩm</h6>
                  <div className="fb-iner">
                    <ul className="footer-links">
                      <li>
                        <Link to="/san-pham/quat-dien">
                          Quạt điện
                        </Link>
                      </li>
                      <li>
                        <Link to="/san-pham/noi-com-dien-cao-tan-ih">
                          Nồi cơm điện cao tần IH
                        </Link>
                      </li>
                      <li>
                        <Link to="/san-pham/may-giat-say-long-nghieng">
                          Máy giặt, sấy lồng nghiêng
                        </Link>
                      </li>
                      <li>
                        <Link to="/san-pham/may-rua-chen-bat">
                          Máy rửa chén, bát
                        </Link>
                      </li>
                      <li>
                        <Link to="/san-pham/may-loc-nuoc-ion-kiem">
                          Máy lọc nước ION kiềm
                        </Link>
                      </li>
                      <li>
                        <Link to="/san-pham/bep-dien-tu">
                          Bếp điện từ
                        </Link>
                      </li>
                      <li>
                        <Link to="/san-pham/may-loc-khi-bu-am">
                          Máy lọc khí bù ẩm
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-6">
                <div className="footer-box box-3">
                  <h6 className="fb-title">Danh mục tin tức</h6>
                  <div className="fb-iner">
                    <ul className="footer-links">
                      <li>
                        <Link to="/tin-tuc/dich-vu">
                          Dịch vụ
                        </Link>
                      </li>
                      <li>
                        <Link to="/tin-tuc/tips">TIPS</Link>
                      </li>
                      <li>
                        <Link to="/tin-tuc/khuyen-mai">
                          Khuyến Mãi
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright">
                  <p>Copyright © 2019. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
