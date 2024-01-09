import { useDispatch } from 'react-redux';
import {
  BinIcon,
  Button,
  ContactInfo,
  EditIcon,
  InfoWrap,
  Item,
  Letter,
} from './ContactItem.styled';
import { deleteContact } from '../../redux/contacts/operations';
import { setContactToEditAction } from '../../redux/contacts/contactEditSlice';

export const ContactItem = ({ contact, openModal, handleEditing }) => {
  const dispatch = useDispatch();

  const removeContact = e => {
    const contactToDelete = e.currentTarget.id;
    dispatch(deleteContact(contactToDelete));
  };

  return (
    <Item>
      <InfoWrap>
        <Letter>{contact.name[0].toUpperCase()}</Letter>
        <ContactInfo>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
        </ContactInfo>
      </InfoWrap>
      <div>
        <Button
          type="button"
          aria-label="edit the contact"
          id={contact.id}
          onClick={() => {
            handleEditing();
            openModal();
            dispatch(setContactToEditAction(contact));
          }}
        >
          <EditIcon />
        </Button>
        <Button
          type="button"
          aria-label="remove the contact"
          id={contact.id}
          onClick={removeContact}
        >
          <BinIcon />
        </Button>
      </div>
    </Item>
  );
};
