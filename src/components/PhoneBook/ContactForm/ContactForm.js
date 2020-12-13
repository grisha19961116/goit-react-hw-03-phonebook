import style from './ContactForm.module.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Filter from '../Filter/Filter.js';
class ContactForm extends Component {
  state = {
    nick: '',
    phoneNumber: '',
    contacts: [],
  };
  reset = () => {
    this.setState({
      nick: '',
      phoneNumber: '',
    });
  };
  handleChange = even => {
    const { name, value } = even.target;
    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };
  handleSubmit = even => {
    even.preventDefault();
    const { nick, contacts } = this.state;
    const check = contacts.some(el => {
      return el.nickName === nick;
    });
    if (check) {
      alert(
        `we have already contact with this nick name "${nick.toLocaleUpperCase()}"`,
      );
      this.reset();
      return;
    }
    this.setState(({ nick, phoneNumber, contacts }) => {
      return {
        contacts: [
          ...contacts,
          { nickName: nick, id: uuidv4(), number: phoneNumber },
        ],
      };
    });
    this.reset();
  };
  delete = ({ target }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(el => el.id !== target.id)],
    }));
  };
  render() {
    const { nick, phoneNumber, contacts } = this.state;
    return (
      <>
        <h1>PhoneBook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              value={nick}
              type="text"
              name="nick"
              placeholder="Enter user Name and Surname"
              onChange={this.handleChange}
            />
          </label>
          <label>
            phoneNumber
            <input
              value={phoneNumber}
              type="phone"
              name="phoneNumber"
              placeholder="Enter user phoneNumber"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add to contacts</button>
        </form>
        <div>
          <Filter propContacts={contacts} click={this.delete.bind(this)} />
        </div>
      </>
    );
  }
}
export default ContactForm;
