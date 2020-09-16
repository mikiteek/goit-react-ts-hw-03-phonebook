import React, {Component} from 'react';
import {v4 as uuid} from "uuid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
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

  render() {
    const contacts = this.state.contacts;
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