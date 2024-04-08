import React, { useContext } from 'react';
import ContactsContext from './ContactsContext';

const ContactsList = () => {
  const { contacts, dispatch } = useContext(ContactsContext);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} ({contact.email})
          <button onClick={() => dispatch({ type: 'DELETE_CONTACT', payload: contact.id })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
