import style from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const INITIAL_STATE = {
  name: '',
  phone: '',
};
class ContactForm extends Component {
  state = INITIAL_STATE;
  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleFromSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;
    const isValidForm = this.validateFrom();
    if (!isValidForm) return;
    onAdd({ id: uuidv4(), name, phone });
    this.resetForm();
  };
  validateFrom = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      toast('Some filed is empty');
      return false;
    }
    return onCheckUnique(name);
  };
  resetForm = () => this.setState(INITIAL_STATE);
  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFromSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
        ></input>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handleChangeForm}
        ></input>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
export default ContactForm;
