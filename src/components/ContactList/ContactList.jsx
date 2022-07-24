import React from 'react';

import PropTypes from 'prop-types';

import { StyledContactList } from './Styled';

const ContactList = ({ contacts, onDelete, isFetching }) => {
  return (
    <StyledContactList>
      <ul className="contacts">
        {isFetching && <p>Loading data...</p>}
        {contacts.length === 0 && !isFetching && <p>There are no contacts found!</p>}
        {contacts.length > 0 &&
          !isFetching &&
          contacts.map(({ id, name, phone }) => {
            return (
              <li key={id} className="contact">
                <span className="contact-name">{name}</span>:&nbsp;{phone}
                <button
                  className="delete-contact-btn"
                  type="button"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </StyledContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default ContactList;
