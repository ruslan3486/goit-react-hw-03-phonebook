import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
class ContactForm extends Component {
  state = {
    number: "",
    name: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={s.text} onSubmit={this.handleSubmit}>
        <label className={s.text_contact}>
          <input
            className={s.text_input}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Michael Jordan"
            onChange={this.handleChange}
          />
        </label>
        <label className={s.text_contact}>
          <input
            className={s.text_input}
            type="text"
            name="number"
            value={this.state.number}
            placeholder="555-55-555"
            onChange={this.handleChange}
          />
        </label>
        <button className={s.text_button} type="submit">
          Add contacts
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactForm;
