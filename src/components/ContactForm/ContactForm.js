import { Component } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import style from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  validateFrom = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;

    if (!name && !phone) {
      toast.warn('⚠️ Fields are empty!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (!name && phone) {
      toast.warn('⚠️ Field name empty!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (!phone && name) {
      toast.warn('⚠️ Field phone empty!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (phone.length !== 10) {
      toast.warn('⚠️ Number has to have 10 symbols!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (name.length > 12) {
      toast.warn('⚠️ Name has to be no longer 12 characters!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    return onCheckUnique(name, phone);
  };

  resetForm = () => this.setState(INITIAL_STATE);

  handleFromSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;
    const isExistPhone = this.validateFrom();
    if (!isExistPhone) return;
    onAdd({ id: uuidv4(), name, phone });
    this.resetForm();
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form className={style.contactForm} onSubmit={this.handleFromSubmit}>
        <input
          className={style.contactForm__input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeInput}
        ></input>
        <input
          className={style.contactForm__input}
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handleChangeInput}
        ></input>
        <button className={style.buttonSubmit} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
