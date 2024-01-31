import { FormInput, FormButton } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  createContact,
  updateContact,
} from './../../redux/contacts/operations';
import { selectContactsAll } from './../../redux/selectors';
import { useEffect, useRef } from 'react';
import { setError } from './../../redux/contacts/contactsSlice';
import { selectContactsError } from './../../redux/selectors';
import { Alert } from 'components/Alert/Alert';
import { selectSelectedContact } from './../../redux/selectors';

export const ContactForm = ({ isDrawerOpen }) => {
  const nameInput = useRef(null);
  const dispatch = useDispatch();

  const contacts = useSelector(selectContactsAll);
  const error = useSelector(selectContactsError);
  const selectedContact = useSelector(selectSelectedContact);

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    isDrawerOpen && nameInput.current.focus();
  }, [isDrawerOpen]);

  const contactsExist = ({ name }) => {
    return contacts.find(item =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  const onFormSubmit = data => {
    if (!selectedContact && contactsExist(data)) {
      dispatch(setError('Contact already added to your Phonebook'));
      nameInput.current.focus();
      return;
    }

    if (selectedContact) {
      dispatch(updateContact({ id: selectedContact.id, constact: data }))
        .unwrap()
        .then(resp => {
          reset();
          document.getElementById('add-contact-drawer').click();
        })
        .catch(error => {});
    } else {
      dispatch(createContact(data))
        .unwrap()
        .then(resp => {
          reset();
          document.getElementById('add-contact-drawer').click();
        })
        .catch(error => {});
    }
  };

  return (
    <FormProvider {...methods}>
      {error && <Alert type="error">{error}</Alert>}

      <form
        className="flex flex-col gap-5"
        name="contactForm"
        autoComplete="off"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <FormInput
          label="Name"
          name="name"
          value={selectedContact?.name}
          type="text"
          placeholder="Enter your Contact Full Name"
          required={true}
          ref={nameInput}
        />
        <FormInput
          label="Number"
          name="number"
          value={selectedContact?.number}
          type="tel"
          placeholder="Enter your Contact Phone Number"
          required={true}
        />

        <FormButton
          type="submit"
          btnType={selectedContact ? 'btn-warning' : 'btn-info'}
        >
          {selectedContact ? 'Update' : 'Add'} contact
        </FormButton>
      </form>
    </FormProvider>
  );
};
