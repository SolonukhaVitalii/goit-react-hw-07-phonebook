import React from 'react';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDelete }) => (
  
  <li className={s.item}>
    <span className={s.info}>
      {name}: {number}
    </span>
    <button className={s.delete} onClick={onDelete} type="button">
      X
    </button>
    </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;