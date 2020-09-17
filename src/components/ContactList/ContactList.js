import React from "react";

const ContactList = ({contacts}) => (
  <ul>
    {contacts.length > 0 && contacts.map(({name, number, id}) => (
      <li key={id}>{name}: {number}</li>
    ))}
  </ul>
);

export default ContactList;