import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  handleSubmit = event => {
    event.preventDefault();
    const {name, number} = this.state;
    this.props.onSubmit({name, number})
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  render() {
    const inputStyles = [styles["form-element"], styles["form-input"]];
    return (
      <section className={styles["section-contacts"]}>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit} className={styles["form-contacts"]}>
          <label htmlFor="name" className={styles["form-element"]}>Name</label>
          <input type="text" name="name" onChange={this.handleChange} className={inputStyles.join(" ")}/>
          <label htmlFor="number" className={styles["form-element"]}>Number</label>
          <input type="text" name="number" onChange={this.handleChange} className={inputStyles.join(" ")}/>
          <br/>
          <button type="submit">Add contact</button>
        </form>
      </section>
    )
  }
}

export default ContactForm;
