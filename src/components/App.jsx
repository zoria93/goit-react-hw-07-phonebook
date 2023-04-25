import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Div, FirstTitle, Title } from 'components/App.styled';

export const App = () => {
  return (
    <Div>
      <FirstTitle>Phonebook</FirstTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Div>
  );
};
