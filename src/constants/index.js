import React from 'react';
import Home from '../containers/Home';
import Product from '../containers/Product';
import News from '../containers/News';
import Contact from '../containers/Contact';
import DetailProduct from '../containers/DetailProduct';
import DetailNews from '../containers/DetailNews';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/san-pham',
    exact: false,
    main: () => <Product />,
  },
  {
    path: '/chi-tiet-san-pham',
    exact: false,
    main: () => <DetailProduct />,
  },
  {
    path: '/tin-tuc',
    exact: false,
    main: () => <News />,
  },
  {
    path: '/chi-tiet-tin-tuc',
    exact: false,
    main: () => <DetailNews />,
  },
  {
    path: '/lien-he',
    exact: false,
    main: () => <Contact />,
  },
];

export const API_ENDPOINT = 'http://localhost:3000';
