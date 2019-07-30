import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContactRequest } from '../../actions/contact';
import { bindActionCreators } from 'redux';

const defaultState = {
  id: '',
  fullname: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  fullnameValid: '',
  emailValid: '',
  phoneValid: '',
  subjectValid: '',
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let fullnameValid = '';
    let emailValid = '';
    let phoneValid = '';
    let subjectValid = '';

    if (!this.state.fullname) {
      fullnameValid = 'Họ tên là bắt buộc';
    }

    if (!this.state.email) {
      emailValid = 'Email là bắt buộc';
    }

    if (this.state.email && !this.state.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      emailValid = 'Email không hợp lệ';
    }

    if (!this.state.phone) {
      phoneValid = 'Số điện thoại là bắt buộc';
    }

    if (this.state.phone && !this.state.phone.match(/^\d{10}$/)) {
      phoneValid = 'Số điện thoại không hợp lệ';
    }

    if (!this.state.subject) {
      subjectValid = 'Chủ đề là bắt buộc';
    }

    if (fullnameValid || emailValid || phoneValid) {
      this.setState({ fullnameValid, emailValid, phoneValid, subjectValid });
      return false;
    }

    return true;
  };

  onSave = e => {
    e.preventDefault();
    const { id, fullname, email, phone, subject, message } = this.state;
    const isValid = this.validate();

    let contact = {
      id: id,
      fullname: fullname,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    if (isValid) {
      this.setState(defaultState);
      this.props.onAddContact(contact);
    }
  };

  render() {
    const { fullname, email, phone, subject, message, emailValid, phoneValid, subjectValid } = this.state;
    return (
      <section className="contact-inner-page pt_large">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="contact-inputs">
                <div className="title text-left">
                  <h4>Nội địa nhật bản Sài Gòn</h4>
                </div>
                <form
                  onSubmit={this.onSave}
                  id="form-edit-contacts"
                  className="contact-form form-with-label"
                >
                  <div className="row">
                    <div className="col-md-6 form-group fg-fullname">
                      <label>
                        Họ và tên<span>*</span>
                      </label>
                      <input
                        className="form-control"
                        name="fullname"
                        value={fullname}
                        onChange={this.onChange}
                        placeholder="Nhập họ và tên"
                        type="text"
                      />
                      <div className="error-msg">
                        {this.state.fullnameValid}
                      </div>
                    </div>
                    <div className="col-md-6 form-group fg-email">
                      <label>
                        Email<span>*</span>
                      </label>
                      <input
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        placeholder="Nhập email"
                        type="text"
                      />
                      <div className="error-msg">{emailValid}</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group fg-phone">
                      <label>
                        Số điện thoại<span>*</span>
                      </label>
                      <input
                        className="form-control"
                        name="phone"
                        value={phone}
                        onChange={this.onChange}
                        placeholder="Nhập số điện thoại"
                        type="text"
                      />
                      <div className="error-msg">{phoneValid}</div>
                    </div>
                    <div className="col-md-6 form-group fg-subject">
                      <label>
                        Chủ đề<span>*</span>
                      </label>
                      <input
                        className="form-control"
                        name="subject"
                        value={subject}
                        onChange={this.onChange}
                        placeholder="Nhập chủ đề"
                        type="text"
                      />
                      <div className="error-msg">{subjectValid}</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Tin nhắn</label>
                    <textarea
                      rows={3}
                      name="message"
                      value={message}
                      onChange={this.onChange}
                      className="form-control"
                      placeholder="Nhập tin nhắn"
                    />
                  </div>
                  <div className="submit-btn">
                    <button
                      type="submit"
                      className="btn btn-primary btn-submit"
                    >
                      Gửi tin nhắn
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="contact-details">
                <div className="title text-left">
                  <h4>HÃY GIỮ LIÊN LẠC</h4>
                </div>
                <div className="contact-inner">
                  <p>
                    Mọi thắc mắc và yêu cầu cần hỗ trợ, vui lòng để lại thông
                    tin tại đây. Chúng tôi sẽ xem xét và gửi phản hồi sớm nhất.
                  </p>
                  <ul className="contact-locations">
                    <li>
                      <span className="fa fa-map-marker" />
                      <p>86/56 Phổ Quang, Phường 2, Tân Bình, TP.HCM</p>
                    </li>
                    <li className="mt-4">
                      <span className="fa fa-phone" />
                      <p>099 648 6789</p>
                    </li>
                    <li className="mt-4">
                      <span className="fa fa-phone" />
                      <p>036 749 0000</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: bindActionCreators(addContactRequest, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ContactForm);
