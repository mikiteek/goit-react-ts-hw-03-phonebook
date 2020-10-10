import React, {Component} from "react";

interface propTypes {
  title: string,
  children: any,
}

class SectionContacts extends Component<propTypes> {
  render() {
    const {title, children} = this.props;
    return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )}
}

export default SectionContacts;