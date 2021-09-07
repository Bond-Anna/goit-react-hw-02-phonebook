import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from './components/form/form';
import { ContactList } from './components/contacts/contactList';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', id: uuidv4(), number: '459-12-56' },
      { name: 'Hermione Kline', id: uuidv4(), number: '443-89-12' },
      { name: 'Eden Clements', id: uuidv4(), number: '645-17-79' },
    ],
  };
  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          onDeleteBtn={this.deleteContact}
        />
      </div>
    );
  }
}
