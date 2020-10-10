import React, {Component} from 'react';
import {v4 as uuid} from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import SectionContacts from "./components/SectionContacts/SectionContacts";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

interface contactTypes {
  id: string,
  name: string,
  number: string,
}

interface stateTypes {
  contacts: contactTypes[],
  filter: string,
}

class App extends Component<{}, stateTypes> {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };
  componentDidUpdate(prevProps: any, prevState: stateTypes): void {
    const {contacts} = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }
  componentDidMount(): void {
    const contactsLocalStorage = localStorage.getItem("contacts");
    if (contactsLocalStorage) {
      this.setState({contacts: JSON.parse(contactsLocalStorage)});
    }
  }

  private addContact = (contact: contactTypes): void => {
    const {name, number} = contact;
    if (name === "" || number === "")
      return;
    if (this.state.contacts.findIndex(contact => contact.name === name) !== -1) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contactNew: contactTypes = {
      id: uuid(),
      name,
      number,
    };
    this.setState(({contacts}) => ({
      contacts: [...contacts, contactNew],
    }));
  };

  private getVisibleContacts = (): contactTypes[] => {
    const {filter, contacts} = this.state;
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));
  }
  private changeFilter = (event: any): void => {
    this.setState({filter: event.target.value});
  }
  private deleteContact = (idContact: string): void => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== idContact),
    }));
  };

  render() {
    const contacts = this.getVisibleContacts();
    return (
      <div>
        <ContactForm onSubmit={this.addContact}/>
        <SectionContacts title="Contacts">
          <Filter onChangeFilter={this.changeFilter}/>
          <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>
        </SectionContacts>
      </div>
    );
  }
}

export default App;