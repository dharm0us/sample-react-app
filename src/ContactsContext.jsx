import React, { createContext, useReducer } from 'react';

const ContactsContext = createContext();

const initialState = [];

function contactsReducer(state, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.payload];
    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
}

export const ContactsContextProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactsReducer, initialState);

  return (
    <ContactsContext.Provider value={{ contacts, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContext;
