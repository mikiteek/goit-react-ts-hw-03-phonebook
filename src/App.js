import React, {Component} from 'react';
import {v4 as uuid} from "uuid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  addContact = name => {
    if (name === "")
      return;
    const contact = {
      id: uuid(),
      name,
    };
    this.setState(({contacts}) => ({
      contacts: [...contacts, contact],
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    this.addContact(this.state.name);
  };
  handleChange = event => {
    this.setState({name: event.target.value});
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
            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          <h2>Contacts</h2>
          <ul>
            {contacts.length > 0 && contacts.map(({name, id}) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default App;