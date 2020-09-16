import React, {Component} from 'react';
import {v4 as uuid} from "uuid";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: "",
    number: "",
    filter: "",
  };

  addContact = contact => {
    const {name, number} = contact;
    if (name === "" || number === "")
      return;
    const contactNew = {
      id: uuid(),
      name,
      number,
    };
    this.setState(({contacts}) => ({
      contacts: [...contacts, contactNew],
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number
    }
    this.addContact(contact);
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  getVisibleContacts = () => {
    const {filter, contacts} = this.state;
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));
  }
  changeFilter = event => {
    this.setState({filter: event.target.value});
  }

  render() {
    const contacts = this.getVisibleContacts();
    return (
      <>
        <section>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <div><label htmlFor="name">Name</label></div>
            <div><input type="text" name="name" onChange={this.handleChange}/></div>
            <br/>
            <div><input type="text" name="number" onChange={this.handleChange}/></div>
            <br/>
            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          <h2>Contacts</h2>
          <label>Find contacts by name
            <br/>
            <input type="text" name="filter" onChange={this.changeFilter}/>
          </label>
          <ul>
            {contacts.length > 0 && contacts.map(({name, number, id}) => (
              <li key={id}>{name}: {number}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default App;