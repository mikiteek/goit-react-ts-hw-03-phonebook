import React from "react";
import PropTypes from "prop-types";

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;