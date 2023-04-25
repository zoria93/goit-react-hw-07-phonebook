import { List } from 'components/ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { ContactItemList } from 'components/ContactItemList/ContactItemList';

export const ContactList = () => {
  const contscts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContacs = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contscts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const contactsName = filterContacs();

  return (
    <List>
      {contactsName.map(({ name, id, phone }) => {
        return <ContactItemList key={id} name={name} id={id} phone={phone} />;
      })}
    </List>
  );
};
