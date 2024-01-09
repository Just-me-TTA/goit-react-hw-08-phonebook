import { Formik } from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactToEdit,
  selectContacts,
} from '../../redux/contacts/selectors';
import { addContact, editContact } from '../../redux/contacts/operations';
import {
  Border,
  Button,
  ErrorMessageStyled,
  FormStyled,
  Input,
  InputBox,
  Label,
} from 'components/Form.styled';

const validationSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required('A name is required'),
  number: yup.string().min(6).max(30).required('A phone number is required'),
});

export const ContactForm = ({ closeModal, isEditingContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactToEdit = useSelector(selectContactToEdit);

  const addNewContact = newContact => {
    const isExist = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleEditContact = data => {
    dispatch(editContact(data));
  };

  const initialValues = {
    name: isEditingContact ? contactToEdit.name : '',
    number: isEditingContact ? contactToEdit.number : '',
  };

  const handleSubmit = values => {
    isEditingContact
      ? handleEditContact({ editedContact: values, id: contactToEdit.id })
      : addNewContact(values);

    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormStyled>
        <InputBox>
          <Input type="text" name="name" required />
          <Label htmlFor="name">Name</Label>
          <Border></Border>
        </InputBox>

        <InputBox>
          <Input type="tel" name="number" required />
          <Label htmlFor="number">Phone number</Label>
          <Border></Border>
        </InputBox>

        <Button type="submit">
          {isEditingContact ? 'Edit contact' : 'Add contact'}
        </Button>

        <ErrorMessageStyled name="name" component="div" />
        <ErrorMessageStyled name="number" component="div" />
      </FormStyled>
    </Formik>
  );
};
