import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import {
  ListContacts,
  Button,
} from 'components/ContactItemList/ContactItemList.styled';

export const ContactItemList = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteContacts(id));
  };

  return (
    <ListContacts>
      {name}: {number}
      <Button onClick={() => deleteContact(id)} type="button">
        <span>Delete</span>
      </Button>
    </ListContacts>
  );
};

ContactItemList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
