import React, { Component } from 'react';
import ContactsList from './ContactsList';
import AddContactForm from './AddContactForm';
import { ContactsContextProvider } from './ContactsContext';

class ContactsManager extends Component {
  render() {
    return (
      <ContactsContextProvider>
        <div className="App">
          <h1>Contacts Manager</h1>
          <AddContactForm />
          <ContactsList />
        </div>
      </ContactsContextProvider>
    );
  }
}

export default ContactsManager;
