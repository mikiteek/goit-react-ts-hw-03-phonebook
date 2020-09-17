import React, {Component} from "react";
import PropTypes from "prop-types";

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
    return (
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
    )
  }
}

export default ContactForm;
