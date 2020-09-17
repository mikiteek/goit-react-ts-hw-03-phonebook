import React from "react";

const ContactList = ({contacts, onDeleteContact}) => (
  <ul>
    {contacts.length > 0 && contacts.map(({name, number, id}) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;