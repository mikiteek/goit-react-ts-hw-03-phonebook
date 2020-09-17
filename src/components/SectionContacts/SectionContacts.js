import React, {Component} from "react";
import PropTypes from "prop-types";

class SectionContacts extends Component {
  render() {
    const {title, children} = this.props;
    return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )}
}

SectionContacts.defaultProps = {
  title: "Contacts",
}

SectionContacts.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
}

export default SectionContacts;