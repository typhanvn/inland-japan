import React, { Component } from 'react';
import '../../components/GlobalLoading/style.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GlobalLoading extends Component {
  render() {
    const { showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className="loadingPage">
          <img src="/assets/image/loading.gif" alt="loading.gif" />
        </div>
      );
    }
    return xhtml;
  }
}
GlobalLoading.propTypes = {
  showLoading: PropTypes.bool,
};
const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading,
  };
};

export default connect(
  mapStateToProps,
  null,
)(GlobalLoading);
