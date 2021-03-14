import React from 'react';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
    return (
      <ul className={s.list}>
      {contacts &&
          contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={() => deleteContact(id)}
          />
          ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;