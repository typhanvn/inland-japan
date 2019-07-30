import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import '../Header/style.css';

const menus = [
  {
    path: '/',
    exact: true,
    name: 'Trang chủ',
    routes: [],
  },
  {
    path: '/san-pham',
    exact: false,
    name: 'Sản phẩm',
    routes: [
      {
        path: '/san-pham/quat-dien',
        exact: false,
        name: 'Quạt điện',
      },
      {
        path: '/san-pham/noi-com-dien-cao-tan-ih',
        exact: false,
        name: 'Nồi cơm điện cao tần IH',
      },
      {
        path: '/san-pham/may-giat-say-long-nghieng',
        exact: false,
        name: 'Máy giặt, sấy lồng nghiêng',
      },
      {
        path: '/san-pham/may-rua-chen-bat',
        exact: false,
        name: 'Máy rửa chén, bát',
      },
      {
        path: '/san-pham/may-loc-nuoc-ion-kiem',
        exact: false,
        name: 'Máy lọc nước ION kiềm',
      },
      {
        path: '/san-pham/bep-dien-tu',
        exact: false,
        name: 'Bếp điện từ',
      },
      {
        path: '/san-pham/may-loc-khi-bu-am',
        exact: false,
        name: 'Máy lọc khí bù ẩm',
      },
    ],
  },
  {
    path: '/tin-tuc',
    exact: false,
    name: 'Tin tức',
    routes: [],
  },
  {
    path: '/lien-he',
    exact: false,
    name: 'Liên hệ',
    routes: [],
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact, subMenu }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        const active = match ? ' active' : '';
        const menuClass = subMenu !== 0 ? 'dropdown' : 'nav-item';
        const dropdownMenu = subMenu !== 0 ? subMenu : '';
        return (
          <li className={menuClass + active}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
            {dropdownMenu}
          </li>
        );
      }}
    />
  );
};

class Header extends Component {
  showSubMenu = menus => {
    let xhtml = null;
    if (menus.length > 0) {
      xhtml = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.path}
            activeOnlyWhenExact={menu.exact}
            subMenu={0}
          />
        );
      });
      return xhtml;
    }
  };

  showMenus = () => {
    let xhtml = null;

    xhtml = menus.map((menu, index) => {
      return menu.routes.length > 0 ? (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.path}
          activeOnlyWhenExact={menu.exact}
          subMenu={
            <div className="sub-menu dropdown-menu ">
              <ul className="all-menu">{this.showSubMenu(menu.routes)}</ul>
            </div>
          }
        />
      ) : (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.path}
          activeOnlyWhenExact={menu.exact}
          subMenu={0}
        />
      );
    });
    return xhtml;
  };

  render() {
    return (
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <ul className="header_list text-md-left text-center">
                  <li>
                    <Link to="tel:0996486789">
                      <i className="fa fa-phone" />
                      099 648 6789
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:0996486789">
                      <i className="fa fa-phone" />
                      036 749 0000
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-mdl">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="wrap-header hm-inner d-sm-flex align-items-center justify-content-between">
                  <div className="header-logo">
                    <Link to="/">
                      <img src="/assets/image/logo.png" alt="logo" />
                    </Link>
                  </div>
                  <form className="header-form" action="/tim-kiem">
                    <input
                      className="search-box"
                      placeholder="Nhập từ khoá tìm kiếm..."
                      defaultValue
                      name="q"
                    />
                    <button type="submit">Tìm kiếm</button>
                  </form>
                  <div className="d-lg-none mm_icon">
                    <div className="form-captions" id="search">
                      <button type="submit" className="submit-btn-2">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="fa fa-bars" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-btm">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        src="/assets/image/logo.png"
                        alt="Nội địa nhật bản"
                      />
                    </Link>
                  </div>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">{this.showMenus()}</ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
