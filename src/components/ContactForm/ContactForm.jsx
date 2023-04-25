import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  Form,
  Label,
  Button,
  Span,
  Input,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    addContacts();
    reset();
  };

  const handleChange = e => {
    const name = e.target.name;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;

      default:
        alert('Input error');
    }
  };

  const addContacts = () => {
    const duplicateName = contacts.find(
      contact =>
        [...contact.name]
          .sort((a, b) => a.localeCompare(b))
          .join('')
          .toLowerCase() ===
        [...name]
          .sort((a, b) => a.localeCompare(b))
          .join('')
          .toLowerCase()
    );
    if (duplicateName) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      name,
      phone,
    };
    dispatch(addContact(newContact));
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
