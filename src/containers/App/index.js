import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { ROUTES } from '../../constants';
import configureStore from '../../redux/configureStore';
import NotFoundPage from '../NotFoundPage';

const store = configureStore();

class App extends Component {
  // fake authentication Promise
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator');
      if (ele) {
        // fade out
        ele.classList.add('available');
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = '';
        }, 2000);
      }
    });
  }

  renderPage = routes => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return result;
  };

  renderRoutes() {
    let xhtml = null;
    xhtml = (
      <Switch>
        {this.renderPage(ROUTES)}
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    );
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          {this.renderRoutes()}
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
