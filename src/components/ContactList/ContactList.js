import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./contactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map((contact) => (
      <li className={s.text_item} key={contact.id}>
        <p className={s.text_info}>{contact.name + ":" + contact.number}</p>
        {
          <button
            className={s.text_delete}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            удалить
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propType = {
  ontacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
