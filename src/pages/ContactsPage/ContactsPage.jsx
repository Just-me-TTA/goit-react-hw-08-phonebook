import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  AddBtnText,
  AddButton,
  PersonIcon,
  Wrapper,
} from './ContactsPage.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditingContact(false);
  };

  const handleEditing = () => {
    setIsEditingContact(true);
  };

  return (
    <Wrapper>
      <Filter />

      <AddButton type="button" aria-label="Add Contact" onClick={openModal}>
        <PersonIcon /> <AddBtnText> Add new contact</AddBtnText>
      </AddButton>

      <ContactList openModal={openModal} handleEditing={handleEditing} />
      {isModalOpen && (
        <Modal closeModal={closeModal} isEditingContact={isEditingContact} />
      )}
    </Wrapper>
  );
};

export default ContactsPage;
