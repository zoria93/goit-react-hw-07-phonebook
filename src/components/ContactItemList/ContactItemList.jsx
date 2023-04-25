import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ListContacts,
  Button,
} from 'components/ContactItemList/ContactItemList.styled';

export const ContactItemList = ({ name, id, phone }) => {
  const dispatch = useDispatch();

  const deleteContacts = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListContacts>
      {name}: {phone}
      <Button onClick={() => deleteContacts(id)} type="button">
        <span>Delete</span>
      </Button>
    </ListContacts>
  );
};

ContactItemList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
