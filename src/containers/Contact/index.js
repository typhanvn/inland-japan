import React, { Component, Fragment } from 'react';
import ContactForm from '../../components/ContactForm';
import Map from '../../components/Map';

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <ContactForm />
        <Map />
      </Fragment>
    );
  }
}
