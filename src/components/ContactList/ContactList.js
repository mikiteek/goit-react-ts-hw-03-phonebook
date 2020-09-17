import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({contacts, onDeleteContact}) => (
  <ul>
    {contacts.length > 0 && contacts.map(({name, number, id}) => (
      <li key={id} className={styles["contactItem"]}>
        <p className={styles["contactInfo"]}>{name}: {number}</p>
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