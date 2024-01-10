import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Error } from 'components/Error/Error';
import { Container, CounterMessage, List } from './ContactList.styled';

export const ContactList = ({ openModal, handleEditing }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {error && <Error />}
      <List>
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            openModal={openModal}
            handleEditing={handleEditing}
          />
        ))}
      </List>
      {!error && (
        <CounterMessage>
          You have {contacts.length} contacts. You have filtered{' '}
          {filteredContacts.length} contacts.
        </CounterMessage>
      )}
    </Container>
  );
};
